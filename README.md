# e4004 PL
```
                   I/O   I/O   I/O   I/O   Vdd    CM   TEST  RESET
                    --    --    --    --    --    --    --    --
                   |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
                ---    --    --    --    --    --    --    --    ---
               |    16    15    14    13    12    11    10     9    |
               |                                                    |
               |           ##      ###         ###           ##     |
               |          ###    ##   ##     ##   ##        ###     |
                --       # ##   ##     ##   ##     ##      # ##     |
                  |     #  ##   ##     ##   ##     ##     #  ##     |
                  |    #   ##   ##     ##   ##     ##    #   ##     |
                --    #######   ##     ##   ##     ##   #######     |
               |           ##    ##   ##     ##   ##         ##     |
               |           ##      ###         ###           ##     |
               |                                                    |
               |     1     2     3     4     5     6     7     8    |
                ---    --    --    --    --    --    --    --    ---
                   |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
                    --    --    --    --    --    --    --    --
                    D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC
```

>  Rozwój w toku

Kontynuacja prostego emulatora układu Intel 4004..

Symulacja do asemblacji i badań architektury komputera , służącego jako urządzenie wbudowane - kalkulator - z kilkoma instrukcjami (46 instrukcji) .

## Intel 4004

Intel 4004 to 4-bitowy procesor wydany przez firmę Intel w 1971 roku, który był pierwszym komercyjnym programowalnym mikroprocesorem .


## Referencje

Jeśli nie wiesz nic o intel 4004, to strona [wikipedia](https://pl.wikipedia.org/wiki/Intel_4004)  jest dobrym miejscem na początek .

Krótka historia Intel 4004. [Chip](https://www.intel.com/content/www/us/en/history/museum-story-of-intel-4004.html)

[4004 Arkusz danych](https://datasheet4u.com/datasheet-pdf/Intel/4004/pdf.php?id=787753)*

[Manual Programowania Języka Asemblera MCS4 - Grudzień 1973](http://www.nj7p.org/Manuals/PDFs/Intel/MCS-4_ALPM_Dec73.pdf)*

Zalecany emulator online [Emulator - Assembler - Disassembler](http://e4004.szyc.org/)

[Github w języku angielskim](https://github.com/lpg2709/emulator-Intel-4004)

## Licencja

[MIT](./LICENSE)
