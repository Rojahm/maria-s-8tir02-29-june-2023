import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="Search">
      <div
        class="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasTopLabel">
            جستجو
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <form className="input-group">
            <input
              type="text"
              placeholder="جستجو نام محصول، کد و..."
              className="form-control"
            ></input>
            <button type="button" className="btn">
              <BsSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
