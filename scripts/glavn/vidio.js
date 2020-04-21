 $("#click").click(function (e) {
     e.preventDefault();
     $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html('')
     })
     $('#exampleModalCenter').on('show.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html(
             '<iframe class="videoPlayer" src="https://www.youtube.com/embed/kc-OcOduEx0?rel=0&autoplay=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow=" encrypted-media" allowfullscreen> </iframe>'
         )
     })
     $('#exampleModalCenter').modal()
 })


 $("#click2").click(function (e) {
     e.preventDefault();
     $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html('')
     })
     $('#exampleModalCenter').on('show.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html(
             '<iframe class="videoPlayer" src="https://www.youtube.com/embed/DuvN4YcJ0ZA?rel=0&autoplay=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow=" encrypted-media" allowfullscreen> </iframe>'
         )
     })
     $('#exampleModalCenter').modal()
 })

 $("#click3").click(function (e) {
     e.preventDefault();
     $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html('')
     })
     $('#exampleModalCenter').on('show.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html(
             '<iframe class="videoPlayer" src="https://www.youtube.com/embed/yGZGSdgJVPM?rel=0&autoplay=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow=" encrypted-media" allowfullscreen> </iframe>'
         )
     })
     $('#exampleModalCenter').modal()
 })

 $("#click4").click(function (e) {
     e.preventDefault();
     $('#exampleModalCenter').on('hidden.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html('')
     })
     $('#exampleModalCenter').on('show.bs.modal', function (e) {
         $('#exampleModalCenter .modal-body').html(
             '<iframe class="videoPlayer" src="https://www.youtube.com/embed/EcJR5d-DJzs?rel=0&autoplay=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow=" encrypted-media" allowfullscreen> </iframe>'
         )
     })
     $('#exampleModalCenter').modal()
 })