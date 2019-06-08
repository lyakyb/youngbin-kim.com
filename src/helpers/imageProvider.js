import rubyonrails from "../images/rubyonrails.png"
import coffeescript from "../images/coffeescript.png"
import react from "../images/react.png"
import graphql from "../images/graphql.png"
import mongodb from "../images/mongodb.png"
import ember from "../images/ember.png"
import objectivec from "../images/objective-c.png"
import javascript from "../images/javascript.png"
import dotnet from "../images/dotnet.png"
import csharp from "../images/csharp.png"
import mysql from "../images/mysql.png"
import rifle from "../images/rifle.png"
import gasmask from "../images/gasmask.png"
import grenade from "../images/grenade.png"
import helmet from "../images/helmet.png"
import gatsby from "../images/gatsby.png"
import ios from "../images/ios.png"
import netlify from '../images/netlify.png'
import github from '../images/github.png'
import simbotics from '../images/simbotics.png'
import java from '../images/java.png'

export const ImageForFileName = fileName => {
  switch (fileName) {
    case "rubyonrails":
      return rubyonrails
    case "coffeescript":
      return coffeescript
    case "react":
      return react
    case "graphql":
      return graphql
    case "mongodb":
      return mongodb
    case "ember":
      return ember
    case "objective-c":
      return objectivec
    case "javascript":
      return javascript
    case "dotnet":
      return dotnet
    case "csharp":
      return csharp
    case "mysql":
      return mysql
    case "rifle":
      return rifle
    case "grenade":
      return grenade
    case "gasmask":
      return gasmask
    case "helmet":
      return helmet
    case "gatsby":
      return gatsby
    case "netlify":
      return netlify
    case "ios":
      return ios
    case 'github':
      return github
    case 'simbotics':
      return simbotics
    case 'java':
      return java
    default:
      return ""
  }
}
