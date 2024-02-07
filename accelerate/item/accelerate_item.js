
  const menuOverflowPage = document.getElementById("menu-overflow-page");
  const modalEditPage = document.getElementById("modal-edit-page");
  const drawerHelpPage = document.getElementById("drawer-help-page");
  const btnPrintPage = document.getElementById("btn-print-page");
  const btnDrawerHelpPage = document.getElementById("btn-drawer-help-page");
  const btnMenuOverflowPage = document.getElementById("btn-menu-overflow-page");
  const btnModalEditPage = document.getElementById("btn-modal-edit-page");
  const btnCloseModal = document.getElementById("btn-close-modal");

  // Drawer and Menu functions
  function printPage(ev) {
    window.print(ev);
  }
  function openDrawerHelpPage() {
  drawerHelpPage.triggerDrawer();
  }

  function openOverflowMenu(ev) {
  menuOverflowPage.present(ev);
  }
  function openModalEditPage(ev) {
  modalEditPage.present(ev);
  }
  function closeModalEditPage(ev) {
  modalEditPage.dismiss(ev);
  }

  btnPrintPage.addEventListener("click", printPage);
  btnDrawerHelpPage.addEventListener("click", openDrawerHelpPage);
  btnMenuOverflowPage.addEventListener("click", openOverflowMenu);
  btnModalEditPage.addEventListener("click", openModalEditPage);
  btnCloseModal.addEventListener("click", closeModalEditPage);
  