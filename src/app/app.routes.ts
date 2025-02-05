import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructralDirectiveComponent } from './components/structral-directive/structral-directive.component';
import { ChartComponent } from './components/chart/chart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoanAppComponent } from './loanApp/loan-app/loan-app.component';
import { CrudComponent } from './CRUD/crud/crud.component';
import { ServiceExpComponent } from './ServicesExp/service-exp/service-exp.component';
import { CrudlocalComponent } from './crudlocal/crudlocal.component';
import { viewChild } from '@angular/core';
import { ViewchildComponent } from './viewchild/viewchild.component';


export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'/home'
    },
    {
        path:'mm',
        pathMatch:'full',
        redirectTo:'/home'
    },
    {
        path:'home',
        component:HomepageComponent
    },
    {
        path:'addEmp',
        component:AddEmployeeComponent
    },
    {
        path:'attDir',
        component:AttributeDirectiveComponent
    },
    {
        path:'datab',
        component:DataBindingComponent
    },
    {
        path:'sd',
        component:StructralDirectiveComponent
    },
    {
        path:'chart',
        component:ChartComponent
    },
    {
        path:'project',
        component:LoanAppComponent
    },
    {
        path:'crud',
        component:CrudComponent
    },
    {
        path:'service',
        component:ServiceExpComponent
    },
    {
        path:'crudlocal',
        component:CrudlocalComponent
    },
    {
        path:'vc',
        component:ViewchildComponent
    },
    {
        path:'lexEx1',
        loadChildren:()=>import('./lex/lex.module').then(m=>m.LexModule)
    }
];
