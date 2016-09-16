namespace bluemaker.Services{

    export interface IMovieService{
        saveMovieOnServicesSide(movie);
        getMoviesOnServicesSide();
        getMovieOnServicesSide(movieId);
        deleteMovieOnServicesSide(movieId);
    }
//MovieService that will connect to /api/movies/:id
    export class MovieService implements IMovieService{

        private movieResource;
        constructor(private $resource:ng.resource.IResourceService){
            //assign $resource object that connects to /api/movies/:id to movieResource
            this.movieResource = $resource('/api/movies/:id');
        }
        //crud: create
        saveMovieOnServicesSide(movie){
            return this.movieResource.save(movie).$promise;
        }
        //crud: read
        getMoviesOnServicesSide(){

            return this.movieResource.query();
        }

        //crud: update - use create method
        getMovieOnServicesSide(movieId){//get movie by movie's id
        return this.movieResource.get({id:movieId});
        }


        //crud: delete
        deleteMovieOnServicesSide(movieId){ //delete movie by movie's id
            return this.movieResource.delete({id:movieId}).$promise;
        }







    }
    angular.module('bluemaker').service('movieService', MovieService);
}
