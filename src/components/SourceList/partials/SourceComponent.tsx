import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Source } from "../../../types/Source";
import { faLink, faRss } from "@fortawesome/free-solid-svg-icons";
import BadRequest from "../../Shared/BadRequest";

interface SourceComponentProps {
  isLoading: boolean;
  sources?: Source[];
  source?: Source;
  error?: boolean;
}

const LoadedSource = ({ sources }: SourceComponentProps) => {
  if (!sources) return null;
  return sources.map((source) => (
    <SourceTemplate key={source.id} source={source} isLoading={false} />
  ));
};

const LoadingSource = () => {
  return Array.from({ length: 10 }, (_, i) => (
    <SourceTemplate key={i} isLoading={true} />
  ));
};

const SourceTemplate = ({ isLoading, source }: SourceComponentProps) => {
  return (
    <article className={`${isLoading ? "is-skeleton" : ""} media`}>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{source?.name}</strong>
            <br />
            {source?.about}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item has-text-text">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </a>
            <a className="level-item has-text-text">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faRss} />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
};

const SourceComponent = ({
  isLoading,
  sources,
  error,
}: SourceComponentProps) => {
  if (error) {
    return <BadRequest error={error} />;
  }

  if (isLoading) {
    return <LoadingSource />;
  }

  return <LoadedSource sources={sources} isLoading={false} />;
};

export default SourceComponent;
