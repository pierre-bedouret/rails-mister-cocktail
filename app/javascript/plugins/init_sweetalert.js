// app/javascript/plugins/init_sweetalert.js
import swal from 'sweetalert';

const initSweetalert = (selector, options = {}, callback = () => {}) => {
  const swalButtons = document.querySelectorAll('.delete-dose');
  console.log(swalButtons);
  if (swalButtons) { // protect other pages
    swalButtons.forEach((swalButton) => {
      swalButton.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.currentTarget);
        const id = event.currentTarget.id;
        console.log(id);
        options = {
                    title: "WARNING",
                    text: `Do you realy want to delete ${id}?`,
                    dangerMode: true,
                    buttons: true,
                    icon: "warning"
                  };
        swal(options).then((value) => {
          console.log(value);
          console.log(id);
          if (value) {
            const link = document.querySelector('#delete-link');
            link.click();
          }
        });
      });
    });
  }
};


export { initSweetalert };
