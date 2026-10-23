import { useState, useEffect } from "react";
import { menuData, menuCategoryName } from "./menuData";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [menuCategoryOpen, setMenuCategoryOpen] = useState(0);
  const [menuItemId, setMenuItemId] = useState(null);

  const activeCategoryItem = menuData[menuCategoryOpen].filter(
    (item) => item.id === menuItemId,
  );

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.05 }, // each button enters slightly after the previous
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.15 } },
  };

  useEffect(() => {
    if (menuItemId) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuItemId]);

  return (
    <div>
      <HeaderImage />

      <div className="main-div">
        <div className="container">
          {/* <HeaderInfo /> */}

          <div>
            <img
              className="w-100 vh-img head-img"
              src="./filler-bar-image.jpg"
              alt=""
            />
          </div>

          <div className="pos-row py-3 nav nav-tabs">
            {menuCategoryName.map((name, index) => (
              <NavButton
                name={name}
                index={index}
                menuCategoryOpen={menuCategoryOpen}
                onMenuCategoryOpen={setMenuCategoryOpen}
                onMenuItemId={setMenuItemId}
                key={index}
              />
            ))}
          </div>

          {/* <Search /> */}

          <div className="menu-main-div mt-4 tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={menuCategoryOpen}
                    className="row"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    {menuData[menuCategoryOpen].map((category) => (
                      <motion.div
                        key={category.id}
                        className="mb-3 col-lg-4 col-md-6"
                        variants={itemVariants}
                        exit="exit"
                      >
                        <MenuItemButton
                          name={category.title}
                          bgImage={category.bgImage}
                          onMenuItemId={setMenuItemId}
                          id={category.id}
                          key={category.id}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  {menuItemId && (
                    <MenuItemList
                      activeCategoryItem={activeCategoryItem}
                      onMenuItemId={setMenuItemId}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderImage() {
  return (
    <header>
      <div className="pos-center-row">
        <img
          className="w-100 vh-img head-img"
          src="./filler-bar-image.jpg"
          alt=""
        />
      </div>
    </header>
  );
}

function HeaderInfo() {
  return (
    <div className="pt-3 text-div">
      <h2>OddMenu Demo</h2>
      <div className="disp-row">
        <i className="fa fa-map-marker me-1" aria-hidden="true"></i>
        <p>Blvd. Partizanski Odredi, Bunjakovec trgovski</p>
      </div>
      <div className="disp-row">
        <div className="disp-row">
          <i className="fa fa-phone me-1" aria-hidden="true"></i>
          <p>+389 111 111</p>
        </div>
        <div className="disp-row">
          <i className="fa fa-wifi ms-3 me-1" aria-hidden="true"></i>
          <p>Wifi_Password123</p>
        </div>
      </div>
    </div>
  );
}

function NavButton({
  name,
  index,
  menuCategoryOpen,
  onMenuCategoryOpen,
  onMenuItemId,
}) {
  return (
    <button
      className={`btn-menu mx-1 px-3 nav-link ${menuCategoryOpen === index ? "active" : ""}`}
      onClick={() => {
        onMenuCategoryOpen(index);
        onMenuItemId(null);
      }}
    >
      {name}
    </button>
  );
}

function Search() {
  return (
    // Search
    <div className="search-div">
      <div className="d-flex border-0 mt-4">
        <input type="text" placeholder="Search" className="search px-3 py-2" />
        <div className="make-left px-1">
          <a href="#" className="src-btn p-2">
            <i className="fa fa-search" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function MenuItemButton({ name, bgImage, onMenuItemId, id }) {
  const menuDivStyle = {
    background: `linear-gradient(rgb(0 0 0 / 40%),rgb(0 0 0 / 40%)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  function handleSetId() {
    onMenuItemId(id);
  }

  return (
    <button className="w-100 h-100" style={{ border: 0 }} onClick={handleSetId}>
      <div className="menu-div" style={menuDivStyle}>
        <h2 className="menu-h">{name}</h2>
      </div>
    </button>
  );
}

function MenuItemList({ activeCategoryItem, onMenuItemId }) {
  const categoryItem = activeCategoryItem[0];

  return (
    <motion.div
      className="menu-item-list-upper-div"
      onClick={() => onMenuItemId(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="modal-dialog modal-dialog-scrollable modal-lg"
        initial={{ scale: 0.95, y: 10, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title text-uppercase" id="exampleModalLabel">
              {categoryItem.title}
            </h5>
            <button
              type="button"
              className="btn-no-bs"
              onClick={() => onMenuItemId(null)}
            >
              <i className="fa fa-times fa-lg"></i>
            </button>
          </div>

          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                {categoryItem.items.map((el) => (
                  <MenuItem el={el} key={el.id} />
                ))}
              </div>
            </div>
          </div>

          {/* */}
        </div>
      </motion.div>
    </motion.div>
  );
}

function MenuItem({ el }) {
  return (
    <div className="d-flex flex-column col-lg-6 mb-5">
      <img className="img-m-menu" src={el.img} alt="" />
      <div className="d-block mt-2">
        <div className="d-flex">
          <h6>{el.title}</h6>
          <div className="make-left">
            <p>{el.weight}</p>
          </div>
        </div>
      </div>
      <p className="menu-item-t">{el.desc}</p>
      <div className="d-flex">
        <p className="menu-item-p">{el.price}</p>
        <p className="dolar-sign">$</p>
      </div>
    </div>
  );
}

export default App;
