import { Dashboard } from './dashboard';
import $ from 'jquery';

$(function(){
    $("button[data-widget-creator]").on('click', (event) => Dashboard.widgetCreator(event));
    
    $('#fetchWidgets').on('click', () => Dashboard.fetchWidgets(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 100) + 1}`));
});