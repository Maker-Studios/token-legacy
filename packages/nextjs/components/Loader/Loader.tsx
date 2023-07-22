import styles from "./Loader.module.scss";
import { cn } from "~~/lib/utils";

interface LoaderProps {
  className?: string;
  pathClassName?: string;
}

const Loader: React.FC<LoaderProps> = ({ pathClassName, className }): JSX.Element => {
  return (
    <svg
      className={cn(styles.Loader, className, "animate-spin")}
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="2"
    >
      <path
        d="M12.4995 2C13.0518 2 13.4995 2.44772 13.4995 3V6C13.4995 6.55228 13.0518 7 12.4995 7C11.9472 7 11.4995 6.55228 11.4995 6V3C11.4995 2.44772 11.9472 2 12.4995 2ZM12.4995 17C13.0518 17 13.4995 17.4477 13.4995 18V21C13.4995 21.5523 13.0518 22 12.4995 22C11.9472 22 11.4995 21.5523 11.4995 21V18C11.4995 17.4477 11.9472 17 12.4995 17ZM21.1597 7C21.4359 7.47829 21.272 8.08988 20.7937 8.36602L18.1956 9.86602C17.7173 10.1422 17.1057 9.97829 16.8296 9.5C16.5535 9.02171 16.7173 8.41012 17.1956 8.13398L19.7937 6.63397C20.272 6.35783 20.8836 6.52171 21.1597 7ZM8.16935 14.5C8.44549 14.9783 8.28161 15.5899 7.80332 15.866L5.20525 17.366C4.72695 17.6422 4.11536 17.4783 3.83922 17C3.56308 16.5217 3.72695 15.9101 4.20525 15.634L6.80332 14.134C7.28161 13.8578 7.8932 14.0217 8.16935 14.5ZM21.1597 17C20.8836 17.4783 20.272 17.6422 19.7937 17.366L17.1956 15.866C16.7173 15.5899 16.5535 14.9783 16.8296 14.5C17.1057 14.0217 17.7173 13.8578 18.1956 14.134L20.7937 15.634C21.272 15.9101 21.4359 16.5217 21.1597 17ZM8.16935 9.5C7.8932 9.97829 7.28161 10.1422 6.80332 9.86602L4.20525 8.36602C3.72695 8.08988 3.56308 7.47829 3.83922 7C4.11536 6.52171 4.72695 6.35783 5.20525 6.63397L7.80332 8.13398C8.28161 8.41012 8.44549 9.02171 8.16935 9.5Z"
        className={cn("fill-[#FFC93F]", pathClassName)}
      />
    </svg>
  );
};

export default Loader;