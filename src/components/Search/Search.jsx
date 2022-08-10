import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

function Search() {
  return (
    <>
      <button className="btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><BiSearchAlt2 /></button>

      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <form className="d-flex" role="search">
              <input type="search" className="form-control me-2" name="search" id="search" placeholder="ابحث فى المكتبة" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit"> <BiSearchAlt2 /></button>
            </form>
          </div>
          <div>
            body
          </div>
        </div>
      </div>
    </>
  )
}

export default Search