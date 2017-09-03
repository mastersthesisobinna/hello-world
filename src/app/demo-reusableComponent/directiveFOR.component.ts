import { Component } from '@angular/core';

@Component({
    selector: 'directiveFor',
    template: `
        <h1>06 Directives: ngFor</h1>
        <div>
            The ngFor directive can be used to enumerate through a list of items.<br/>
            Please note that the actual name of the directive is ngForOf. You should
            Use this when searching about the directive on the angular.io webpage.<br/>
            You can also several exported values provided with the ngFor directive. 
            Example include:<br/>
            <ul>
                <li>index returns number</li>
                <li>first returns boolean</li>
                <li>last returns boolean</li>
                <li>even returns boolean</li>
                <li>odd returns boolean</li>
            </ul>
            Note you can provide alias for this exported values if you wish using the as keyword.
        </div>

        <h4>List of Courses</h4>
        <ul *ngFor="let course of courses; index as i; even as isEven">
            <li>{{course.name}} index at {{i}} <span *ngIf='isEven'>(Even index)</span></li>
        </ul>

        <h4>Change detection- Dynamic use of ngFor</h4>
        <button class="btn btn-primary" (click)="addCourse()">Add Course</button>
        <ul *ngFor="let course of courses; index as i; even as isEven">
            <li>
                {{course.name}} index at {{i}} 
                <button class="btn btn-primary" (click)="onDelete(course)">Delete Course</button>
                <button class="btn btn-primary" (click)="updateName(course)">Update Course name</button>
            </li>
        </ul>


        <h4>Performance optimization- Using Tracking</h4>
        When angular loads object, it creates new memory for them. Even if the object
        doesn't change or is similar to ones already existing, each time it loads that
        object, it creates a new memory for it. This can cause performance drain when dealing
        with large number of data-sets. Not only is the new objects in memory created but
        also a new DOM structure is created everything angular renders the object again
        and again. So to prevent this, you must tell angular not to track object rendering
        by memory location (which is its default) but to track object rendering different
        using properties of the object itself. This way, if the object's property value already
        exist in memory, angular won't have to re-render that object again as long as it remains
        unchanged.
        <br/>

        <button class="btn btn-primary" (click)="loadStudents()">Load Students</button>
        <ul *ngFor="let student of students; trackBy: trackStudentRenderingUsingID">
            <li>{{student.id +" "+student.name}}</li>
        </ul>

        
    `,
    styles: [``]
})
export class DirectiveFor{
    constructor(){}

    //array of 3 course objects
    courses = [
        {id: "A001", name: "Math"},
        {id: "A002", name: "English"},
        {id: "A003", name: "Physics"}
    ];

    addCourse = () => {
        this.courses.push({id: "A004", name: "Chemistry"});
    }

    onDelete = (courseObject) => {
        let index = this.courses.indexOf(courseObject);
        this.courses.splice(index, 1); //delete 1 object in array from the starting index
    }

    updateName = (courseObject) => {
        courseObject.name = "Updated";
    }

    students;

    loadStudents = () => {
        this.students = [
            {id:"A1", name: "Mike"},
            {id:"A2", name: "Peter"},
            {id:"A3", name: "James"}
        ];
    }

    trackStudentRenderingUsingID = (index, student) => {
        //track a student indexed in students using their id
        return student ? student.id : undefined;
    }
}

