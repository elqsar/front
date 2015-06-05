module demoApp {
    'use strict';

    export class PersonService {

        public static $inject = [
            'Restangular'
        ];

        constructor(private Restangular: restangular.IService) {
        }

        getAllPersons() {
            return this.Restangular.all('persons').getList();
        }

        createPerson(person: Person) {
            return this.Restangular.all('persons').post(person);
        }

        updatePerson(person: Person) {
            var personCopy = this.Restangular.copy(person);
            return this.Restangular.one('persons', person.id).post(personCopy);
        }

        deletePerson(person: Person) {
            return this.Restangular.one('persons', person.id).remove();
        }

        getPersonTechnologies(person: Person) {
            return this.Restangular.one('persons', person.id).all('technologies');
        }

        setPersonTechnologies(person: Person, technologies: Technology[]) {
            return this.Restangular.one('persons', person.id).all('technologies').put(technologies);
        }
    }

}