<?php

/* ----------------- DESCRIÇÃO DO TESTE -----------------------*/

/*
Um palíndromo é uma palavra que pode ser lida  da mesma maneira da esquerda para direita, como ao contrário.
Exemplo: ASA.

Faça uma função que ao receber um input de uma palavra, string, verifica se é um palíndromo retornando verdadeiro ou falso.
O fato de um caracter ser maiúsculo ou mínusculo não deverá influenciar no resultado da função.

Exemplo: isPalindrome("Asa") deve retonar true.
*/




class Palindrome
{
    public static function isPalindrome($word)
    {
        $word = strtolower($word);
        return $word === strrev($word);
    }
}

echo Palindrome::isPalindrome('Deleveled') ? "Verdadeiro" : "Falso";