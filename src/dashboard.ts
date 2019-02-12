import {default as Swal, SweetAlertType} from 'sweetalert2';
import $ from 'jquery';



export namespace Dashboard {

    export function widgetCreator(event: JQuery.ClickEvent){
        let $button: JQuery     = $(event.target);
        let widgetType: string  = $button.data('widget-creator');

        Swal.fire(`Welcome to the ${widgetType.toUpperCase()} chart creator!`, 'HERE COMES THE FORMS!', "question")
    }

    export function fetchWidgets(url: string){
        return fetch(url).then(response => response.json()).then(json => Swal.fire({title: 'Response:', text: json.title, toast: true, position: "top-end", timer: 3000}));
    }


    export function fetchWidgets2(url: string){
        return $.get(url).done(json => Swal.fire({title: 'Response:', text: json.title, toast: true, position: "top-end", timer: 3000}));
    }

    export function showHello(name: string){
        Swal.fire(`Hello ${name}!`);
    }
}

declare global{
    interface Window{ Dashboard?: any; }
}
window.Dashboard = Dashboard || {};