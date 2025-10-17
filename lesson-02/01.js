/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false
const isVerifiedUser = false
const hasSpecialPermission = false
const hasTemporaryPass = true

let isAccess

// your code
let user 
if((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass) === true)  {
    isAccess = true
    console.log("Доступ разрешен")
} else {
    isAccess = false
    console.log("Доступ запрещен")
}
