import { expect, test } from 'vitest'
import { nameExists, nameIsNotTooLong, nameIsString, sayHello } from './hello'

test('Cas de démarrage #1 - Dire bonjour avec un prénom', () => {
    expect(sayHello("Laïla")).toBe("Bonjour, Laïla !")
})

test('Cas de démarrage #2 - Ne pas accepter les nombres comme prénom', () => {
    expect(nameIsString(42)).toBe(false)
})

test('Cas de démarrage #3 - Vérifier si un prénom a été entré', () => {
    expect(nameExists(null)).toBe(false)
})

test('Cas de démarrage #4 - Vérifier si le prénom correspond à la limite de taille imposée', () => {
    expect(nameIsNotTooLong("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(false)
})