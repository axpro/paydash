'use strict';

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {

        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
        role: DataTypes.STRING,
        gender: DataTypes.STRING,
        dob: DataTypes.STRING,
        mobile: DataTypes.STRING,
        email: DataTypes.STRING,
        sas: DataTypes.BOOLEAN,
        sas_years: DataTypes.STRING,
        ias: DataTypes.BOOLEAN,
        ias_years: DataTypes.STRING,
        title: DataTypes.STRING,
        region_type: DataTypes.STRING,
        region_name: DataTypes.STRING,
        work_email: DataTypes.STRING,
        work_years: DataTypes.STRING,
        time_on_nrega: DataTypes.STRING,
        isActive: DataTypes.BOOLEAN,
        lang: DataTypes.STRING
    }, {
        tableName: 'users',
        timestamps: true,
        underscored: true,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                User.hasMany(models.user_regions);
                User.hasMany(models.notifications);
            }
        }
    });

    return User;
};
