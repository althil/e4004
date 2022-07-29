/*
	ASCIIMATION
*/

frame=0;

function loop()
{
	list=document.intro.anima;
      if (frame<71)
	{
		list.value=anima_data[frame];
		++frame;
		if (frame<12) setTimeout ("loop()", 250);
		if (frame==12) setTimeout ("loop()", 3000);
		if (frame>12 && frame<50) setTimeout ("loop()", 125);
		if (frame==50) setTimeout ("loop()", 3000);
		if (frame>50 && frame<59) setTimeout ("loop()", 125);
		if (frame>58) setTimeout ("loop()", 500);
	}
}


// intro table

var anima_data= new Array();
 anima_data[0]="\n\n\n\n\n\n\n\n\n\n\n                             4004";
 anima_data[1]="\n\n\n\n\n\n\n                          INTEL MCS-4\n\n\n\n                             4004";
 anima_data[2]="\n\n\n\n\n\n\n                          INTEL MCS-4\n\n\n\n                            4 0 0 4";
 anima_data[3]="\n\n\n\n\n\n\n                          INTEL MCS-4\n\n                       -   -   -   -\n                      / | | | | | / |\n                        --| | | | | --|\n                        |  -   -    |";
 anima_data[4]="\n\n\n\n\n\n\n                          INTEL MCS-4\n\n                     #   ##    ##      #\n                    ##  #  #  #  #    ##\n                   # #  #  #  #  #   # #\n                  ####  #  #  #  #  ####\n                     #   ##    ##      #";
 anima_data[5]="\n\n\n\n\n\n\n                          INTEL MCS-4\n\n                    #    ##     ##       #\n                   ##   #  #   #  #     ##\n                  # #   #  #   #  #    # #\n                 ####   #  #   #  #   ####\n                    #   #  #   #  #      #\n                    #    ##     ##       #";
 anima_data[6]="\n\n\n\n\n\n\n\n                #      ##         ##           #\n               ##    #    #     #    #        ##\n              # #   #      #   #      #      # #\n             #  #   #      #   #      #     #  #\n            #   #   #      #   #      #    #   #\n           ######   #      #   #      #   ######\n                #    #    #     #    #         #\n                #      ##         ##           #";
 anima_data[7]="\n\n\n\n\n\n\n\n              ##      ###         ###           ##\n             ###    ##   ##     ##   ##        ###\n            # ##   ##     ##   ##     ##      # ##\n           #  ##   ##     ##   ##     ##     #  ##\n          #   ##   ##     ##   ##     ##    #   ##\n         #######   ##     ##   ##     ##   #######\n              ##    ##   ##     ##   ##         ##\n              ##      ###         ###           ##";
 anima_data[8]="";
 anima_data[9]=anima_data[7];
anima_data[10]="";
anima_data[11]=anima_data[7];
anima_data[12]=anima_data[7]+"\n\n\n   ---    \n      |  |\n       --";
anima_data[13]=anima_data[7]+"\n\n        1\n   ---\n      |  |\n       --\n       D0";
anima_data[14]=anima_data[7]+"\n\n        1\n   ---    --\n      |  |  |  |\n       --    --\n       D0";
anima_data[15]=anima_data[7]+"\n\n        1     2\n   ---    --\n      |  |  |  |\n       --    --\n       D0    D1";
anima_data[16]=anima_data[7]+"\n\n        1     2\n   ---    --    --\n      |  |  |  |  |  |\n       --    --    --\n       D0    D1";
anima_data[17]=anima_data[7]+"\n\n        1     2     3\n   ---    --    --\n      |  |  |  |  |  |\n       --    --    --\n       D0    D1    D2";
anima_data[18]=anima_data[7]+"\n\n        1     2     3\n   ---    --    --    --\n      |  |  |  |  |  |  |  |\n       --    --    --    --\n       D0    D1    D2";
anima_data[19]=anima_data[7]+"\n\n        1     2     3     4\n   ---    --    --    --\n      |  |  |  |  |  |  |  |\n       --    --    --    --\n       D0    D1    D2    D3";
anima_data[20]=anima_data[7]+"\n\n        1     2     3     4\n   ---    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --\n       D0    D1    D2    D3";
anima_data[21]=anima_data[7]+"\n\n        1     2     3     4     5\n   ---    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --\n       D0    D1    D2    D3    Vss";
anima_data[22]=anima_data[7]+"\n\n        1     2     3     4     5\n   ---    --    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --\n       D0    D1    D2    D3    Vss";
anima_data[23]=anima_data[7]+"\n\n        1     2     3     4     5     6\n   ---    --    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --\n       D0    D1    D2    D3    Vss   Ph1";
anima_data[24]=anima_data[7]+"\n\n        1     2     3     4     5     6\n   ---    --    --    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --    --\n       D0    D1    D2    D3    Vss   Ph1";
anima_data[25]=anima_data[7]+"\n\n        1     2     3     4     5     6     7\n   ---    --    --    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --    --\n       D0    D1    D2    D3    Vss   Ph1   Ph2";
anima_data[26]=anima_data[7]+"\n\n        1     2     3     4     5     6     7\n   ---    --    --    --    --    --    --    --    ---\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --    --    --\n       D0    D1    D2    D3    Vss   Ph1   Ph2";
anima_data[27]=anima_data[7]+"\n\n        1     2     3     4     5     6     7     8\n   ---    --    --    --    --    --    --    --    ---\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --    --    --\n       D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC";
anima_data[28]="\n\n\n\n\n\n                                                       |\n                                                       |\n              ##      ###         ###           ##     |\n             ###    ##   ##     ##   ##        ###     |\n            # ##   ##     ##   ##     ##      # ##     |\n           #  ##   ##     ##   ##     ##     #  ##     |\n          #   ##   ##     ##   ##     ##    #   ##     |\n         #######   ##     ##   ##     ##   #######     |\n              ##    ##   ##     ##   ##         ##     |\n              ##      ###         ###           ##     |\n                                                       |\n        1     2     3     4     5     6     7     8    |\n   ---    --    --    --    --    --    --    --    ---\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --    --    --\n       D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC";
anima_temp="\n                                                       |\n              ##      ###         ###           ##     |\n             ###    ##   ##     ##   ##        ###     |\n            # ##   ##     ##   ##     ##      # ##     |\n           #  ##   ##     ##   ##     ##     #  ##     |\n          #   ##   ##     ##   ##     ##    #   ##     |\n         #######   ##     ##   ##     ##   #######     |\n              ##    ##   ##     ##   ##         ##     |\n              ##      ###         ###           ##     |\n                                                       |\n        1     2     3     4     5     6     7     8    |\n   ---    --    --    --    --    --    --    --    ---\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --    --    --\n       D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC";
anima_data[29]="\n\n\n                                                 --\n                                                |  |\n                                                    ---\n                                                       |"+anima_temp;
anima_data[30]="\n\n                                                RESET\n                                                 --\n                                                |  |\n                                                    ---\n                                                  9    |"+anima_temp;
anima_data[31]="\n\n                                                RESET\n                                           --    --\n                                          |  |  |  |\n                                              --    ---\n                                                  9    |"+anima_temp;
anima_data[32]="\n\n                                          TEST  RESET\n                                           --    --\n                                          |  |  |  |\n                                              --    ---\n                                           10     9    |"+anima_temp;
anima_data[33]="\n\n                                          TEST  RESET\n                                     --    --    --\n                                    |  |  |  |  |  |\n                                        --    --    ---\n                                           10     9    |"+anima_temp;
anima_data[34]="\n\n                                     CM   TEST  RESET\n                                     --    --    --\n                                    |  |  |  |  |  |\n                                        --    --    ---\n                                     11    10     9    |"+anima_temp;
anima_data[35]="\n\n                                     CM   TEST  RESET\n                               --    --    --    --\n                              |  |  |  |  |  |  |  |\n                                  --    --    --    ---\n                                     11    10     9    |"+anima_temp;
anima_data[36]="\n\n                              Vdd    CM   TEST  RESET\n                               --    --    --    --\n                              |  |  |  |  |  |  |  |\n                                  --    --    --    ---\n                               12    11    10     9    |"+anima_temp;
anima_data[37]="\n\n                              Vdd    CM   TEST  RESET\n                         --    --    --    --    --\n                        |  |  |  |  |  |  |  |  |  |\n                            --    --    --    --    ---\n                               12    11    10     9    |"+anima_temp;
anima_data[38]="\n\n                        I/O   Vdd    CM   TEST  RESET\n                         --    --    --    --    --\n                        |  |  |  |  |  |  |  |  |  |\n                            --    --    --    --    ---\n                         13    12    11    10     9    |"+anima_temp;
anima_data[39]="\n\n                        I/O   Vdd    CM   TEST  RESET\n                   --    --    --    --    --    --\n                  |  |  |  |  |  |  |  |  |  |  |  |\n                      --    --    --    --    --    ---\n                         13    12    11    10     9    |"+anima_temp;
anima_data[40]="\n\n                  I/O   I/O   Vdd    CM   TEST  RESET\n                   --    --    --    --    --    --\n                  |  |  |  |  |  |  |  |  |  |  |  |\n                      --    --    --    --    --    ---\n                   14    13    12    11    10     9    |"+anima_temp;
anima_data[41]="\n\n                  I/O   I/O   Vdd    CM   TEST  RESET\n             --    --    --    --    --    --    --\n            |  |  |  |  |  |  |  |  |  |  |  |  |  |\n                --    --    --    --    --    --    ---\n                   14    13    12    11    10     9    |"+anima_temp;
anima_data[42]="\n\n            I/O   I/O   I/O   Vdd    CM   TEST  RESET\n             --    --    --    --    --    --    --\n            |  |  |  |  |  |  |  |  |  |  |  |  |  |\n                --    --    --    --    --    --    ---\n             15    14    13    12    11    10     9    |"+anima_temp;
anima_data[43]="\n\n            I/O   I/O   I/O   Vdd    CM   TEST  RESET\n       --    --    --    --    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n   ---    --    --    --    --    --    --    --    ---\n             15    14    13    12    11    10     9    |"+anima_temp;
anima_data[44]="\n\n      I/O   I/O   I/O   I/O   Vdd    CM   TEST  RESET\n       --    --    --    --    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n   ---    --    --    --    --    --    --    --    ---\n       16    15    14    13    12    11    10     9    |"+anima_temp;
anima_data[45]="\n\n      I/O   I/O   I/O   I/O   Vdd    CM   TEST  RESET\n       --    --    --    --    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n   ---    --    --    --    --    --    --    --    ---\n  |    16    15    14    13    12    11    10     9    |\n  |                                                    |\n  |           ##      ###         ###           ##     |\n  |          ###    ##   ##     ##   ##        ###     |\n   --       # ##   ##     ##   ##     ##      # ##     |\n     |     #  ##   ##     ##   ##     ##     #  ##     |\n     |    #   ##   ##     ##   ##     ##    #   ##     |\n   --    #######   ##     ##   ##     ##   #######     |\n  |           ##    ##   ##     ##   ##         ##     |\n  |           ##      ###         ###           ##     |\n  |                                                    |\n  |     1     2     3     4     5     6     7     8    |\n   ---    --    --    --    --    --    --    --    ---\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --    --    --\n       D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC";
anima_data[46]="\n\n      I/O   I/O   I/O   I/O   Vdd    CM   TEST  RESET\n       --    --    --    --    --    --    --    --\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n   ---    --    --    --    --    --    --    --    ---\n  |    16    15    14    13    12    11    10     9    |\n  |                                                    |\n  |                                                    |\n  |                                                    |\n   --                                                  |\n     |                                                 |\n     |                                                 |\n   --                                                  |\n  |                                                    |\n  |                                                    |\n  |                                                    |\n  |     1     2     3     4     5     6     7     8    |\n   ---    --    --    --    --    --    --    --    ---\n      |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n       --    --    --    --    --    --    --    --\n       D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC";
anima_data[47]=anima_data[45];
anima_data[48]=anima_data[46];
anima_data[49]=anima_data[45];
anima_data[50]="\n\n     I/O   I/O   I/O   I/O   Vdd    CM   TEST  RESET\n      --    --    --    --    --    --    --    --\n     |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n   --    --    --    --    --    --    --    --    --\n  |   16    15    14    13    12    11    10     9   |\n  |                                                  |\n  |          ##      ###         ###           ##    |\n  |         ###    ##   ##     ##   ##        ###    |\n   --      # ##   ##     ##   ##     ##      # ##    |\n     |    #  ##   ##     ##   ##     ##     #  ##    |\n     |   #   ##   ##     ##   ##     ##    #   ##    |\n   --   #######   ##     ##   ##     ##   #######    |\n  |          ##    ##   ##     ##   ##         ##    |\n  |          ##      ###         ###           ##    |\n  |                                                  |\n  |    1     2     3     4     5     6     7     8   |\n   --    --    --    --    --    --    --    --    --\n     |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n      --    --    --    --    --    --    --    --\n      D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC",
anima_data[51]="\n\n     I/O   I/O   I/O   I/O   Vdd    CM   TEST  RESET\n      --    --    --    --    --    --    --    --\n     |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n   --    --    --    --    --    --    --    --    --\n  |   16    15    14    13    12    11    10     9   |\n  |          ##      ###         ###           ##    |\n  |         ###    ##   ##     ##   ##        ###    |\n   --      # ##   ##     ##   ##     ##      # ##    |\n     |    #  ##   ##     ##   ##     ##     #  ##    |\n     |   #   ##   ##     ##   ##     ##    #   ##    |\n   --   #######   ##     ##   ##     ##   #######    |\n  |          ##    ##   ##     ##   ##         ##    |\n  |          ##      ###         ###           ##    |\n  |    1     2     3     4     5     6     7     8   |\n   --    --    --    --    --    --    --    --    --\n     |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n      --    --    --    --    --    --    --    --\n      D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC",
anima_data[52]="\n\n     I/O   I/O   I/O   I/O   Vdd    CM   TEST  RESET\n      --    --    --    --    --    --    --    --\n     |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n   --    --    --    --    --    --    --    --    -\n  |   16    15    14    13    12    11    10     9  |\n  |          #      ##         ##           #       |\n  |         ##    #    #     #    #        ##       |\n   --      # #   #      #   #      #      # #       |\n     |    #  #   #      #   #      #     #  #       |\n     |   #   #   #      #   #      #    #   #       |\n   --   ######   #      #   #      #   ######       |\n  |          #    #    #     #    #         #       |\n  |          #      ##         ##           #       |\n  |    1     2     3     4     5     6     7     8  |\n   --    --    --    --    --    --    --    --    -\n     |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n      --    --    --    --    --    --    --    --\n      D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC",
anima_data[53]="\n\n     I/O   I/O   I/O   I/O   Vdd    CM   TEST  RESET\n      --    --    --    --    --    --    --    --\n     |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n   --    --    --    --    --    --    --    --    -\n  |   16    15    14    13    12    11    10     9  |\n  |                                                 |\n  |               #    ##     ##       #            |\n   --            ##   #  #   #  #     ##            |\n     |          # #   #  #   #  #    # #            |\n     |         ####   #  #   #  #   ####            |\n   --             #   #  #   #  #      #            |\n  |               #    ##     ##       #            |\n  |                                                 |\n  |    1     2     3     4     5     6     7     8  |\n   --    --    --    --    --    --    --    --    -\n     |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n      --    --    --    --    --    --    --    --\n      D0    D1    D2    D3    Vss   Ph1   Ph2  SYNC",
anima_data[54]="\n\n     I/O  I/O  I/O  I/O  Vdd   CM  TEST RESET\n      --   --   --   --   --   --   --   --\n     |  | |  | |  | |  | |  | |  | |  | |  |\n   --    -    -    -    -    -    -    -    -\n  |   16   15   14   13   12   11   10    9  |\n  |                                          |\n  |            #    ##     ##       #        |\n   --         ##   #  #   #  #     ##        |\n     |       # #   #  #   #  #    # #        |\n     |      ####   #  #   #  #   ####        |\n   --          #   #  #   #  #      #        |\n  |            #    ##     ##       #        |\n  |                                          |\n  |    1    2    3    4    5    6    7    8  |\n   --    -    -    -    -    -    -    -    -\n     |  | |  | |  | |  | |  | |  | |  | |  |\n      --   --   --   --   --   --   --   --\n      D0   D1   D2   D3   Vss  Ph1  Ph2 SYNC",
anima_data[55]="\n\n     I/O  I/O  I/O  I/O  Vdd   CM  TEST RESET\n      --   --   --   --   --   --   --   --\n     |  | |  | |  | |  | |  | |  | |  | |  |\n   --    -    -    -    -    -    -    -    -\n  |                                          |\n  |            #    ##     ##       #        |\n   --         ##   #  #   #  #     ##        |\n     |       # #   #  #   #  #    # #        |\n     |      ####   #  #   #  #   ####        |\n   --          #   #  #   #  #      #        |\n  |            #    ##     ##       #        |\n  |                                          |\n   --    -    -    -    -    -    -    -    -\n     |  | |  | |  | |  | |  | |  | |  | |  |\n      --   --   --   --   --   --   --   --\n      D0   D1   D2   D3   Vss  Ph1  Ph2 SYNC";
anima_data[56]="\n\n\n     -   -   -   -   -   -   -   -\n    | | | | | | | | | | | | | | | |\n   -   -   -   -   -   -   -   -   -\n  |                                 |\n  |        #    ##     ##       #   |\n   --     ##   #  #   #  #     ##   |\n     |   # #   #  #   #  #    # #   |\n     |  ####   #  #   #  #   ####   |\n   --      #   #  #   #  #      #   |\n  |        #    ##     ##       #   |\n  |                                 |\n   -   -   -   -   -   -   -   -   -\n    | | | | | | | | | | | | | | | |\n     -   -   -   -   -   -   -   -";
anima_data[57]="\n\n\n\n   ---#--#--#--#--#--#--#--#--\n  |                           |\n  |       #   ##    ##      # |\n   --    ##  #  #  #  #    ## |\n     |  # #  #  #  #  #   # # |\n   --  ####  #  #  #  #  #### |\n  |       #   ##    ##      # |\n  |                           |\n   ---#--#--#--#--#--#--#--#--";
anima_data[58]="\n\n\n\n   --#--#--#--#--#--#--#--#--\n  |                          |\n  |      #   ##    ##      # |\n   --   ##  #  #  #  #    ## |\n     | # #  #  #  #  #   # # |\n   -- ####  #  #  #  #  #### |\n  |      #   ##    ##      # |\n  |                          |\n   --#--#--#--#--#--#--#--#--";
anima_data[59]="\n                    INTEL  CORPORATION\n\n\n   --#--#--#--#--#--#--#--#--\n  |                          |\n  |      #   ##    ##      # |\n   --   ##  #  #  #  #    ## |\n     | # #  #  #  #  #   # # |\n   -- ####  #  #  #  #  #### |\n  |      #   ##    ##      # |\n  |                          |\n   --#--#--#--#--#--#--#--#--";
anima_data[60]="\n                    INTEL  CORPORATION\n\n\n   --#--#--#--#--#--#--#--#--\n  |                          |   MCS-4\n  |      #   ##    ##      # |\n   --   ##  #  #  #  #    ## |\n     | # #  #  #  #  #   # # |\n   -- ####  #  #  #  #  #### |\n  |      #   ##    ##      # |\n  |                          |\n   --#--#--#--#--#--#--#--#--";
anima_data[61]="\n                    INTEL  CORPORATION\n\n\n   --#--#--#--#--#--#--#--#--\n  |                          |   MCS-4\n  |      #   ##    ##      # |\n   --   ##  #  #  #  #    ## |   MICRO COMPUTER SET\n     | # #  #  #  #  #   # # |\n   -- ####  #  #  #  #  #### |\n  |      #   ##    ##      # |\n  |                          |\n   --#--#--#--#--#--#--#--#--";
anima_data[62]="\n                    INTEL  CORPORATION\n\n\n   --#--#--#--#--#--#--#--#--\n  |                          |   MCS-4\n  |      #   ##    ##      # |\n   --   ##  #  #  #  #    ## |   MICRO COMPUTER SET\n     | # #  #  #  #  #   # # |\n   -- ####  #  #  #  #  #### |   ASSEMBLER\n  |      #   ##    ##      # |\n  |                          |\n   --#--#--#--#--#--#--#--#--";
anima_data[63]="\n                    INTEL  CORPORATION\n\n\n   --#--#--#--#--#--#--#--#--\n  |                          |   MCS-4\n  |      #   ##    ##      # |\n   --   ##  #  #  #  #    ## |   MICRO COMPUTER SET\n     | # #  #  #  #  #   # # |\n   -- ####  #  #  #  #  #### |   ASSEMBLER  DISASSEMBLER\n  |      #   ##    ##      # |\n  |                          |\n   --#--#--#--#--#--#--#--#--";
anima_data[64]="\n                    INTEL  CORPORATION\n\n\n   --#--#--#--#--#--#--#--#--\n  |                          |   MCS-4\n  |      #   ##    ##      # |\n   --   ##  #  #  #  #    ## |   MICRO COMPUTER SET\n     | # #  #  #  #  #   # # |\n   -- ####  #  #  #  #  #### |   ASSEMBLER  DISASSEMBLER\n  |      #   ##    ##      # |\n  |                          |   EMULATOR\n   --#--#--#--#--#--#--#--#--";
anima_data[65]=anima_data[64]+"\n\n\n  * 4-bitowy równoległy procesor z 46 instrukcjami";
anima_data[66]=anima_data[65]+"\n  * Zestaw instrukcji zawiera skoki warunkowe,\n    skoki do podprogramu i pośredni fetching";
anima_data[67]=anima_data[66]+"\n  * 10.8 mikrosekund na wykonanie instrukcji";
anima_data[68]=anima_data[67]+"\n  * CPU wprost kompatybilny z układami rodziny MCS-40";
anima_data[69]=anima_data[68]+"\n  * Łatwa rozbudowa - jeden CPU może bezpośrednio sterować\n    aż do 32,768 bitów ROMu oraz do 5120 bitów RAMu";
// ANSI
//anima_data[70]=anima_data[69]+"\n\n                    � Maciej Szyc 2007, e4004(at)szyc.org";
// UTF-8
anima_data[70]=anima_data[69]+"\n\n                      © Maciej Szyc 2007, e4004(at)szyc.org";

