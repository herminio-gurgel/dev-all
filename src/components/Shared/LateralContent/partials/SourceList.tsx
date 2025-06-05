import { useEffect, useState } from "react";
import { Source } from "../../../../types/Site";
import { getSources } from "../../../../services/devallApi";
import styled from "styled-components";
import BadRequest from "../../BadRequest";

const StyledSourceList = styled.div`
  ul {
    height: 260px;

    li a {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;

      [data-theme="dark"] & {
        color: orange;
        &:hover {
          color: #ffd580;
        }
      }

      [data-theme="light"] & {
        &:hover {
          color: #5c74ff;
        }
      }
    }
  }
`;

const SourceList = () => {
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const data = await getSources();
        setSources(data);
        setError(false);
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error("Erro ao buscar fontes:", err);
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    void fetchSources();
  }, []);

  return (
    <StyledSourceList className={loading ? "is-skeleton" : ""}>
      {error ? (
        <BadRequest />
      ) : (
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
      )}
    </StyledSourceList>
  );
};

export default SourceList;
