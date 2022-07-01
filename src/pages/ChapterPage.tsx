import { Outlet } from "react-router-dom";

const ChapterPage = ({ chapterNum }) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ChapterPage;
