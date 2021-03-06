import tienda from '../tienda.png'
function Container(){
    return(
        <div class="toast bg-primary text-white" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src={tienda} width ="120px" height="25px" class="rounded mr-2" alt="..." />
    <strong class="mr-auto">Hola, gracias por tu visita</strong>
    <small> Comencemos </small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
  Bienvenido a la tienda de ecommerce.Podrás elegir entre muchos productos
  </div>
</div>
    )
}

export default Container;