import { Mongo } from 'meteor/mongo';

export const Anotacoes = new Mongo.Collection('notes');

export const Users = new Mongo.Collection('users');