function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          $('#profile-pic').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
            
    }
}

