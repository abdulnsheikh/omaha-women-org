import * as React from 'react';

export default function Pagination({pages, fetchPageData}) {
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
     fetchPageData(currentPage);
  }, [currentPage]);

  return (
    <div aria-label="Pagination">
        <hr className="my-0" />
        <ul className="pagination justify-content-center my-4">
          <li className="pink-page-item disabled">
            <a className="page-link" tabindex="-1" aria-disabled="true">
              {"<<"}
            </a>
          </li>
          <li className="pink-page-item active" aria-current="page">
            <a className="page-link">1</a>
          </li>
          <li className="pink-page-item">
            <a className="page-link">{">>"}</a>
          </li>
        </ul>
    </div>
  )
}
