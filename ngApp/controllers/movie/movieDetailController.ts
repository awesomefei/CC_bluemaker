namespace bluemaker.Controllers{
    export class MovieDetailController{
        public movie;
        public isEditMode;
        private hasBeenEdited
            constructor(
                public movieId,
                private movieService:bluemaker.Services.IMovieService,
                private $uibModalInstance:ng.ui.bootstrap.IModalServiceInstance


            ){
                this.getMovie();
                this.isEditMode = false;
            }



            closeModal(){
                this. $uibModalInstance.close({hasBeenEdited: this.hasBeenEdited});
            }

            toggleEditMode(){
                this.isEditMode = !this.isEditMode;
            }

            getMovie(){
                this.movie = this.movieService.getMovieOnServicesSide(this.movieId);
            }

            saveMovie(){
                this.movieService.saveMovieOnServicesSide(this.movie)
                .then(()=>{
                    this.hasBeenEdited = true;
                    this.toggleEditMode();

                })
                .catch(()=>{
                    console.log('something went wrong in saveMovie...');
                });
            }
co
            deleteMovie(){
                    this.movieService.deleteMovieOnServicesSide(this.movieId)
                    .then(()=>{
                        this.hasBeenEdited = true;
                        this.closeModal();
                    })

                    .catch(()=>{
                        console.log("something went wrong...")
                    })
            }

            cancelSave(){
                this.getMovie();
                this.toggleEditMode();
            }

    }

}
