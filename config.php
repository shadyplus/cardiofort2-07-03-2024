<?php

$apiKey = '1IPcGkwfvW355wLqM4w9ZgZR0RqAvjw0yX6QcB0UrDRwMJ7aWg4e9KdRqfkT1Ns3';   // Ключ доступа к API

$apiSendLeadUrl = 'http://api.cpa.tl/api/lead/send';
$apiGetLeadUrl = 'http://api.cpa.tl/api/lead/feed';

$offer_id = 11985;  // для каждого оффера свой айди, надо уточнять его в админке или у суппортов

$stream_hid = 'jKOU6aX3';     // id потока, не обязательное, если указано, заявка будет привязана к потоку

if(!$apiKey){
    echo 'Ключ доступа к API не определен. Получите в личном кабинете или обратитесь в службу поддержки';
    die;
}


if(!$offer_id){
    echo 'ID оффера не определен';
    die;
}