'use strict';

var resolveMap = {
    'Client': {
        'name': 'Client',
        'table': 'clients',
        'primaryKey': 'id',

        'aliases': {
            'first_name': 'firstName',
            'last_name': 'lastName',
            'password_hash': 'passwordHash',
            'encrypt_salt': 'encryptSalt',
            'mobile_app_id': 'mobileAppId',
            'mobile_app_os': 'mobileAppOs',
            'facebook_id': 'facebookId',
            'twitter_id': 'twitterId',
            'home_zip_code': 'homeZipCode'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'MapEvent': {
        'name': 'MapEvent',
        'table': 'map_events',
        'primaryKey': 'id',

        'aliases': {
            'client_id': 'clientId',
            'type': 'mapEventsType'
        },

        'referenceMap': {
            'client': 'clientId'
        },

        'listReferences': {}
    },

    'Notification': {
        'name': 'Notification',
        'table': 'notifications',
        'primaryKey': 'id',

        'aliases': {
            'type': 'notificationsType',
            'ts_created': 'tsCreated',
            'client_id': 'clientId'
        },

        'referenceMap': {
            'client': 'clientId'
        },

        'listReferences': {}
    },

    'Report': {
        'name': 'Report',
        'table': 'reports',
        'primaryKey': 'id',

        'aliases': {
            'type': 'reportsType',
            'is_public': 'isPublic',
            'ts_event': 'tsEvent',
            'first_name': 'firstName',
            'last_name': 'lastName',
            'facebook_id': 'facebookId',
            'send_to_jdoe': 'sendToJdoe',
            'send_to_police': 'sendToPolice',
            'send_to_legal': 'sendToLegal',
            'ts_created': 'tsCreated',
            'client_id': 'clientId'
        },

        'referenceMap': {
            'client': 'clientId'
        },

        'listReferences': {}
    }
};

exports.resolveMap = resolveMap;

exports.registerType = function registerType(type) {
    if (!resolveMap[type.name]) {
        throw new Error(
            'Cannot register type "' + type.name + '" - resolve map does not exist for that type'
        );
    }

    resolveMap[type.name].type = type;
};

exports.getType = function getType(type) {
    if (!resolveMap[type] || !resolveMap[type].type) {
        throw new Error('No type registered for type \'' + type + '\'');
    }

    return resolveMap[type].type;
};