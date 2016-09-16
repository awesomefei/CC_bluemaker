namespace bluemaker.Controllers{
    export class MovieCreateController{
    //field that will contain the movie information that will be created
        public movie;

        constructor(
            private movieService:bluemaker.Services.IMovieService,
            private $state: ng.ui.IStateService
            ){

        }
        saveMovie(){
            this.movieService.saveMovieOnServicesSide(this.movie)
                .then(()=>{
                    this.$state.go('movie');
                })

                .catch(()=>{
                    console.log('something went wrong in MovieCreateController...');
                });
        }
    }
}
