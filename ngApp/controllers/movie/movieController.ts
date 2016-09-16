namespace bluemaker.Controllers{
    export class MovieController{
        //field that will contain all the movies
        public movies;
        constructor(
            private movieService: bluemaker.Services.MovieService,
            private $uibModal:ng.ui.bootstrap.IModalService

        ){

            this.getMovies();
        }
        getMovies(){
            //return all the movies from the movieService >> getMovies();
            //this.movies=this.movieServiceOnServicesSide.getMovies();
            this.movies = this.movieService.getMoviesOnServicesSide();
        }
        getMovieDetails(id){
            this.$uibModal.open({
                templateUrl:'/ngApp/views/movieDitails.html',
                controller:bluemaker.Controllers.MovieDetailController,
                controllerAs:'vm',
                resolve:{
                    movieId:()=>{
                        return id;

                    }
                },
                size:'sm'
            }).result.then((data)=>{
                    console.log(data.hasBeenEdited);
                    if(data.hasBeenEdited == true){
                        this.getMovies();
                    }
            });
        }
    }





}
