'use client';

import { useState } from 'react';
import { bookPages } from './data/pages';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showTOC, setShowTOC] = useState(false);

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    setShowTOC(false);
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    if (currentPage < bookPages.length - 1) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  const page = bookPages[currentPage];

  return (
    <div className="container">
      <div className="book-container">
        <div className="book-header">
          <h1 className="book-title">ओशोच्या विचार</h1>
          <p className="book-subtitle">१०० पानांचा आध्यात्मिक प्रवास</p>
        </div>

        <div className="navigation">
          <button
            className="nav-button"
            onClick={() => setShowTOC(!showTOC)}
          >
            {showTOC ? 'पुस्तक' : 'अनुक्रमणिका'}
          </button>
          <button
            className="nav-button"
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            ← मागील
          </button>
          <span className="page-number">
            पान {currentPage + 1} / {bookPages.length}
          </span>
          <button
            className="nav-button"
            onClick={nextPage}
            disabled={currentPage === bookPages.length - 1}
          >
            पुढील →
          </button>
        </div>

        {showTOC ? (
          <div className="toc-container">
            {bookPages.map((p, index) => (
              <div
                key={index}
                className="toc-item"
                onClick={() => goToPage(index)}
              >
                <span className="toc-number">पान {p.pageNumber}:</span>
                {p.title}
              </div>
            ))}
          </div>
        ) : (
          <div className="page-content">
            <h2 className="page-header">{page.title}</h2>
            {page.quote && (
              <div className="saying-quote">
                "{page.quote}"
              </div>
            )}
            <div className="saying-explanation">
              {page.content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
