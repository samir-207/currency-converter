#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome to currency conversion bureau");
console.log("Please note that rates are updated as on 7th April, 2024");

let currency: any = 
{
    USD : 1,
    ArgentinePeso : 862.501356,
    AustralianDollar : 1.520065,
    BahrainiDinar : 0.376,
    BotswanaPula : 13.716317,
    BrazilianReal : 5.070396,
    BritishPound : 0.791242,
    BruneianDollar : 1.348818,
    BulgarianLev : 1.804191,
    CanadianDollar : 1.359023,
    ChileanPeso : 948.758305,
    ChineseYuanRenminbi : 7.233262,
    ColombianPeso : 3767.80213,
    CzechKoruna : 23.34595,
    DanishKrone : 6.882209,
    EmiratiDirham : 3.6725,
    Euro : 0.922468,
    HongKongDollar : 7.828891,
    HungarianForint : 359.791107,
    IcelandicKrona : 138.752338,
    IndianRupee : 83.293941,
    IndonesianRupiah : 15865.881094,
    IranianRial : 42002.5961349999,
    IsraeliShekel : 3.757098,
    JapaneseYen : 151.617708,
    KazakhstaniTenge : 445.608907,
    KuwaitiDinar : 0.308602,
    LibyanDinar : 4.833997,
    MalaysianRinggit : 4.746042,
    MauritianRupee : 47.165152,
    MexicanPeso : 16.462464,
    NepaleseRupee : 133.332776,
    NewZealandDollar : 1.663027,
    NorwegianKrone : 10.729377,
    OmaniRial : 0.385047,
    PakistaniRupee : 277.856276,
    PhilippinePeso : 56.494835,
    PolishZloty : 3.947927,
    QatariRiyal : 3.64,
    RomanianNewLeu : 4.583062,
    RussianRuble : 92.560337,
    SaudiArabianRiyal : 3.75,
    SingaporeDollar : 1.348818,
    SouthAfricanRand : 18.678755,
    SouthKoreanWon : 1352.939479,
    SriLankanRupee : 299.034034,
    SwedishKrona : 10.644375,
    SwissFranc : 0.90204,
    TaiwanNewDollar : 32.158231,
    ThaiBaht : 36.604142,
    TrinidadianDollar : 6.722669,
    TurkishLira : 32.037472,
    VenezuelanBolivar : 3612527.118135,
    
};

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message: "From Currency <<<",
            choices: ['USD','ArgentinePeso','AustralianDollar','BahrainiDinar','BotswanaPula','BrazilianReal','BritishPound','BruneianDollar','BulgarianLev','CanadianDollar','ChileanPeso','ChineseYuanRenminbi','ColombianPeso','CzechKoruna','DanishKrone','EmiratiDirham','Euro','HongKongDollar','HungarianForint','IcelandicKrona','IndianRupee','IndonesianRupiah','IranianRial','IsraeliShekel','JapaneseYen','KazakhstaniTenge','KuwaitiDinar','LibyanDinar','MalaysianRinggit','MauritianRupee','MexicanPeso','NepaleseRupee','NewZealandDollar','NorwegianKrone','OmaniRial','PakistaniRupee','PhilippinePeso','PolishZloty','QatariRiyal','RomanianNewLeu','RussianRuble','SaudiArabianRiyal','SingaporeDollar','SouthAfricanRand','SouthKoreanWon','SriLankanRupee','SwedishKrona','SwissFranc','TaiwanNewDollar','ThaiBaht','TrinidadianDollar','VenezuelanBolivar']
        },
        {
            name: "to",
            type: "list",
            message: "To Currency >>>",
            choices: ['USD','ArgentinePeso','AustralianDollar','BahrainiDinar','BotswanaPula','BrazilianReal','BritishPound','BruneianDollar','BulgarianLev','CanadianDollar','ChileanPeso','ChineseYuanRenminbi','ColombianPeso','CzechKoruna','DanishKrone','EmiratiDirham','Euro','HongKongDollar','HungarianForint','IcelandicKrona','IndianRupee','IndonesianRupiah','IranianRial','IsraeliShekel','JapaneseYen','KazakhstaniTenge','KuwaitiDinar','LibyanDinar','MalaysianRinggit','MauritianRupee','MexicanPeso','NepaleseRupee','NewZealandDollar','NorwegianKrone','OmaniRial','PakistaniRupee','PhilippinePeso','PolishZloty','QatariRiyal','RomanianNewLeu','RussianRuble','SaudiArabianRiyal','SingaporeDollar','SouthAfricanRand','SouthKoreanWon','SriLankanRupee','SwedishKrona','SwissFranc','TaiwanNewDollar','ThaiBaht','TrinidadianDollar','VenezuelanBolivar']
        },
        {
            name: "amount",
            type: "number",
            message: "What amount ???",
        }
    ]
)

let fromCurrency: any = currency[userAnswer.from];
let toCurrency: any = currency[userAnswer.to];
let userAmount: number = userAnswer.amount;
let baseConversion: number = userAmount / fromCurrency;
let finalConversion: number = baseConversion * toCurrency;
console.log(finalConversion.toFixed(2));

