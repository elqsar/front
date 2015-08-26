module demoApp {
    'use strict';

    export class HackerService {

        public static $inject = [
            'Restangular'
        ];

        constructor(private Restangular: restangular.IService) {
        }

        getAllPersons() {
            return this.Restangular.all('persons').getList();
        }

        createPerson(person: Hacker) {
            return this.Restangular.all('persons').post(person);
        }

        updatePerson(person: Hacker) {
            var personCopy = this.Restangular.copy(person);
            return this.Restangular.one('persons', person.id).post(personCopy);
        }

        deletePerson(person: Hacker) {
            return this.Restangular.one('persons', person.id).remove();
        }

        getPersonTechnologies(person: Hacker) {
            return this.Restangular.one('persons', person.id).all('technologies');
        }

        setPersonTechnologies(person: Hacker, technologies: Technology[]) {
            return this.Restangular.one('persons', person.id).all('technologies').put(technologies);
        }
    }

}