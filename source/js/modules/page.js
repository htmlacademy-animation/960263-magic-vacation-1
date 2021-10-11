export default () => {
  window.addEventListener(`load`, () => {
    document.documentElement.classList.add(`page--loaded`);
    makeMenuItemActive();
  });

  function makeMenuItemActive() {
    const menu = document.querySelector(`.page-header__menu`);
    const menuItems = Array.from(menu.querySelectorAll(`.js-menu-link`));
    if (!menuItems.find((item) => item.classList.contains(`active`))) {
      const [firstItem] = menuItems;
      firstItem.classList.add(`active`);
    }
  }
};
