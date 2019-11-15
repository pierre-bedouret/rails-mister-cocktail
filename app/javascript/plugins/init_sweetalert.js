// app/javascript/plugins/init_sweetalert.js
import swal from 'sweetalert';

const initSweetalert = (selector, options = {}, callback = () => {}) => {
  const swalButtons = document.querySelectorAll('.delete-dose');

  if (swalButtons) { // protect other pages
    swalButtons.forEach((swalButton) => {
      swalButton.addEventListener('click', (event) => {
        const id = event.currentTarget.id;
        const name = event.currentTarget.dataset.name
        options = {
                    title: "WARNING",
                    text: `Do you realy want to delete ${name}?`,
                    dangerMode: true,
                    buttons: true,
                    icon: "warning"
                  };
        swal(options).then((value) => {
          if (value) {
            const link = document.querySelector(`#delete-link-${id}`);
            link.click();
          }
        });
      });
    });
  }
};


export { initSweetalert };
