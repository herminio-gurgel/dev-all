import { useEffect, useState } from "react";
import { Source } from "../../../../types/Site";
import { getSources } from "../../../../services/devallApi";
import styled from "styled-components";

const StyledSourceList = styled.div`
  ul {
    height: 260px;

    li a {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }
  }
`;

const SourceList = () => {
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const data = await getSources();
        setSources(data);
      } catch (error) {
        console.error("Erro ao buscar sources:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchSources();
  }, []);

  return (
    <StyledSourceList className={loading ? "is-skeleton" : ""}>
      <ul>
        {sources.map((source) => (
          <li key={source.id}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="is-block"
              title={source.name}
            >
              {source.name}
            </a>
          </li>
        ))}
      </ul>
    </StyledSourceList>
  );
};

export default SourceList;
