import React from 'react';
import { render } from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import i18n, {i18nOptions} from './localization/i18n';

if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };
}

i18n.init(i18nOptions)
  .then(function(t) {
    render(
      <Router>
        <Route path="/" component={AppContainer} />
      </Router>,
      document.getElementById("appContainer")
    );
  });