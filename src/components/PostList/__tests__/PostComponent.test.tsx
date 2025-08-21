import PostComponent from "../partials/PostComponent";
import { render, screen } from "@testing-library/react";

const mockPosts = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `Título do Post ${(i + 1).toString()}`,
  content: `Conteúdo do Post ${(i + 1).toString()}`,
  summary: `Resumo do Post ${(i + 1).toString()}`,
  url: `https://exemplo.com/post${(i + 1).toString()}`,
  source: {
    id: 1,
    name: "Fonte Exemplo",
    url: "https://exemplo.com",
    favicon: "",
  },
  publishedAt: new Date().toISOString(),
  pubDate: new Date().toISOString(),
  site: {
    id: 1,
    name: "Site Exemplo",
    url: "https://exemplo.com",
    rss: "https://exemplo.com/rss",
    about: null,
    iframe: false,
  },
  indexDate: new Date().toISOString(),
}));

describe("Error", () => {
  it("renders the error message", () => {
    render(<PostComponent error={true} isLoading={false} />);
    expect(
      screen.getByText(
        "Desculpe, não conseguimos encontrar o que você está procurando.",
      ),
    ).toBeInTheDocument();
  });
});

describe("Loading", () => {
  it("renders loading posts when isLoading is true and page is 1", () => {
    render(<PostComponent isLoading={true} page={1} />);
    const loadingPosts = screen.getAllByRole("paragraph");
    expect(loadingPosts.length).toBe(20);
  });
});

describe("Loaded Posts", () => {
  it("renders the loaded posts when isLoading is false and error is false", () => {
    render(<PostComponent isLoading={false} error={false} posts={mockPosts} />);
    const loadedPosts = screen.getAllByRole("paragraph");
    expect(loadedPosts.length).toBe(15);
  });
});
