import "./pageNotFound.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
function PageNotFound() {
  return (
    <div className="pageNotFoundContainer container">
      <h1 className="text-center errorHeading">Seems you are lost</h1>
      <div className="errorStatusWrapper">
        <ErrorOutlineIcon className="errorIcon" />
        <h3 className="text-center mt15 errorStatusCode">404</h3>
      </div>
    </div>
  );
}
export default PageNotFound;
