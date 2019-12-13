const axios = require('axios')
const fs = require('fs')
const commands = require('../model/commands.model')

async function get(date) {
  try {
    // const response = await axios.get(`http://192.168.1.70/log/${date}.txt`)
    // return response.data
    return logsMock
    
  }
  catch {
    return []
  }
}
exports.get = get

async function set(link) {
  try {
    const response = axios.get(`${link}`)
    return response
  }
  catch {
    return response
  }
}
exports.set = set

const logsMock = 
'1575855660 IRRX 3772793023\n' +
'1575855661 IRRX 3782893727\n' +
'1575855662 IRRX 3782893727\n' +
'1575855663 IRRX 3782893727\n' +
'1575855730 IRRX 3772793023\n' +
'1575855780 IRRX 3772793023\n' +
'1575855781 IRRX 3782893727\n' +
'1575855782 IRRX 3782893727\n' +
'1575855783 IRRX 3782893727\n' +
'1575855810 IRRX 3772793023';
 
const logsMock2 = 
'1569628947 IRRX 3772793023\n'+
'1569628970 RFRX 11476633\n'+
'1569628973 RFRX 11476633\n'+
'1569629080 RFRX 14534146\n'+
'1569629924 RFRX 9056490\n'+
'1569631848 RFRX a68\n'+
'1569632092 RFRX 9830462\n'+
'1569633652 RFRX 10633250\n'+
'1569634057 RFRX 12447514\n'+
'1569635550 RFRX 11803034\n'+
'1569636640 RFRX 12495514\n'+
'1569637302 RFRX 10923802\n'+
'1569638913 RFRX 14422529\n'+
'1569640607 RFRX 12242154\n'+
'1569641761 RFRX 8773018\n'+
'1569641775 RFRX 8773018\n'+
'1569644352 RFRX 11912706\n'+
'1569648265 RFRX 11030554\n'+
'1569654932 RFRX 10042522\n'+
'1569660349 RFRX 10607770\n'+
'1569660362 RFRX 10607770\n'+
'1569664470 RFRX 11114522\n'+
'1569667469 RFRX 12461417\n'+
'1569668106 RFRX 9489818\n'+
'1569668196 RFRX 10669539\n'+
'1569668199 RFRX 10669539\n'+
'1569668221 RFRX 10669539\n'+
'1569668524 RFRX 11803034\n'+
'1569668782 RFRX 9644106\n'+
'1569669182 RFRX 12054105\n'+
'1569669939 RFRX 2725913\n'+
'1569670059 RFRX 12054106\n'+
'1569670102 RFRX 12054106\n'+
'1569671287 RFRX 10252826\n'+
'1569671655 localPingErrCnt\n'+
'1569672205 localPingErrCnt\n'+
'1569672511 localPingErrCnt\n'+
'1569672744 RFRX 11317490\n'+
'1569672774 RFRX 11055617\n'+
'1569673073 RFRX 12495514\n'+
'1569674421 RFRX 10607770\n'+
'1569674633 RFRX 11690674\n'+
'1569676021 RFRX 12230298\n'+
'1569676035 RFRX 12230298\n'+
'1569676315 RFRX 669937\n'+
'1569677774 RFRX 9976769\n'+
'1569677911 RFRX 11690674\n'+
'1569678131 RFRX 9639450\n'+
'1569678131 RFRX 9635354\n'+
'1569678161 RFRX 12447514\n'+
'1569678355 IRRX 3772793023\n'+
'1569678355 IRRX 3772793023\n'+
'1569678368 IRRX 3782912087\n'+
'1569678375 IRRX 3782912087\n'+
'1569678382 IRRX 3782908007\n'+
'1569678384 IRRX 3782908007\n'+
'1569678385 IRRX 3782912087\n'+
'1569678387 IRRX 3782908007\n'+
'1569678389 IRRX 3782908007\n'+
'1569678395 IRRX 3782871287\n'+
'1569678398 IRRX 3782871287\n'+
'1569681483 IRRX 3782912087\n'+
'1569682066 RFRX 14422529\n'+
'1569682125 RFRX 12447514\n'+
'1569682125 RFRX 10350362\n'+
'1569683068 IRRX 3782871287\n'+
'1569683114 RFRX 12447514\n'+
'1569683248 RFRX 12230298\n'+
'1569683730 IRRX 3782912087\n'+
'1569683752 IRRX 3772782313\n'+
'1569683753 IRRX 3772782313\n'+
'1569683754 IRRX 3772816993\n'+
'1569683755 IRRX 3772816993\n'+
'1569683757 IRRX 3772794553\n'+
'1569683757 IRRX 3772794553\n'+
'1569683758 IRRX 3772794553\n'+
'1569683758 IRRX 3772794553\n'+
'1569683759 IRRX 3772794553\n'+
'1569683760 IRRX 3772782313\n'+
'1569683780 IRRX 3772794553\n'+
'1569683780 IRRX 3772794553\n'+
'1569683781 IRRX 3772810873\n'+
'1569683781 IRRX 3772810873\n'+
'1569683786 IRRX 3772794553\n'+
'1569683786 IRRX 3772794553\n'+
'1569683787 IRRX 3772794553\n'+
'1569683790 IRRX 3772794553\n'+
'1569683790 IRRX 3772794553\n'+
'1569683791 IRRX 3772794553\n'+
'1569683796 IRRX 3772794553\n'+
'1569683796 IRRX 3772794553\n'+
'1569683799 IRRX 3772794553\n'+
'1569683799 IRRX 3772794553\n'+
'1569683805 IRRX 3772794553\n'+
'1569683805 IRRX 3772794553\n'+
'1569683806 IRRX 3772819033\n'+
'1569683806 IRRX 3772819033\n'+
'1569683807 IRRX 3772810873\n'+
'1569683807 IRRX 3772810873\n'+
'1569683808 IRRX 3772794553\n'+
'1569683809 IRRX 3772794553\n'+
'1569683809 IRRX 3772794553\n'+
'1569683809 IRRX 3772794553\n'+
'1569683810 IRRX 3772794553\n'+
'1569683810 IRRX 3772794553\n'+
'1569683810 IRRX 3772794553\n'+
'1569683810 IRRX 3772794553\n'+
'1569683810 IRRX 3772794553\n'+
'1569683810 IRRX 3772794553\n'+
'1569683811 IRRX 3772794553\n'+
'1569683811 IRRX 3772794553\n'+
'1569683811 IRRX 3772794553\n'+
'1569683813 IRRX 3772778233\n'+
'1569683814 IRRX 3772778233\n'+
'1569683815 IRRX 3772778233\n'+
'1569683819 IRRX 3772810873\n'+
'1569683819 IRRX 3772810873\n'+
'1569683822 IRRX 3772819033\n'+
'1569683822 IRRX 3772819033\n'+
'1569683825 IRRX 3772819033\n'+
'1569683825 IRRX 3772819033\n'+
'1569683826 IRRX 3772819033\n'+
'1569683826 IRRX 3772819033\n'+
'1569683826 IRRX 3772819033\n'+
'1569683826 IRRX 3772819033\n'+
'1569683827 IRRX 3772819033\n'+
'1569683827 IRRX 3772819033\n'+
'1569683828 IRRX 3772819033\n'+
'1569683828 IRRX 3772819033\n'+
'1569683830 IRRX 3772819033\n'+
'1569683830 IRRX 3772819033\n'+
'1569683833 IRRX 3772810873\n'+
'1569683833 IRRX 3772810873\n'+
'1569683834 IRRX 3772810873\n'+
'1569683834 IRRX 3772810873\n'+
'1569683837 IRRX 3772782313\n'+
'1569683837 IRRX 3772782313\n'+
'1569683841 IRRX 3772810873\n'+
'1569683841 IRRX 3772810873\n'+
'1569683843 IRRX 3772778233\n'+
'1569683843 IRRX 3772778233\n'+
'1569683844 IRRX 3772794553\n'+
'1569683844 IRRX 3772794553\n'+
'1569683845 IRRX 3772810873\n'+
'1569683845 IRRX 3772810873\n'+
'1569683851 IRRX 3772794553\n'+
'1569683852 IRRX 3772794553\n'+
'1569683853 IRRX 3772794553\n'+
'1569683853 IRRX 3772794553\n'+
'1569683854 IRRX 3772794553\n'+
'1569683858 IRRX 3772794553\n'+
'1569683858 IRRX 3772794553\n'+
'1569683859 IRRX 3772794553\n'+
'1569683860 IRRX 3772810873\n'+
'1569683862 IRRX 3772794553\n'+
'1569683862 IRRX 3772794553\n'+
'1569683862 IRRX 3772794553\n'+
'1569683862 IRRX 3772794553\n'+
'1569683862 IRRX 3772794553\n'+
'1569683863 IRRX 3772794553\n'+
'1569683863 IRRX 3772794553\n'+
'1569683863 IRRX 3772794553\n'+
'1569683863 IRRX 3772794553\n'+
'1569683863 IRRX 3772794553\n'+
'1569683864 IRRX 3772819033\n'+
'1569683864 IRRX 3772819033\n'+
'1569683864 IRRX 3772819033\n'+
'1569683865 IRRX 3772819033\n'+
'1569683865 IRRX 3772819033\n'+
'1569683865 IRRX 3772819033\n'+
'1569683865 IRRX 3772819033\n'+
'1569683865 IRRX 3772819033\n'+
'1569683866 IRRX 3772819033\n'+
'1569683866 IRRX 3772819033\n'+
'1569683866 IRRX 3772819033\n'+
'1569683866 IRRX 3772819033\n'+
'1569683866 IRRX 3772819033\n'+
'1569683866 IRRX 3772819033\n'+
'1569683866 IRRX 3772819033\n'+
'1569683866 IRRX 3772819033\n'+
'1569683867 IRRX 3772819033\n'+
'1569683867 IRRX 3772819033\n'+
'1569683868 IRRX 3772819033\n'+
'1569683868 IRRX 3772810873\n'+
'1569683868 IRRX 3772810873\n'+
'1569683869 IRRX 3772810873\n'+
'1569683869 IRRX 3772810873\n'+
'1569683870 IRRX 3772810873\n'+
'1569683870 IRRX 3772810873\n'+
'1569683870 IRRX 3772810873\n'+
'1569683872 IRRX 3772782313\n'+
'1569683873 IRRX 3772782313\n'+
'1569683874 IRRX 3772810873\n'+
'1569683874 IRRX 3772810873\n'+
'1569683875 IRRX 3772782313\n'+
'1569683876 IRRX 3772810873\n'+
'1569683878 IRRX 3772782313\n'+
'1569683878 IRRX 3772782313\n'+
'1569683889 IRRX 3772810873\n'+
'1569683889 IRRX 3772810873\n'+
'1569683890 IRRX 3772782313\n'+
'1569683890 IRRX 3772782313\n'+
'1569683899 IRRX 3772810873\n'+
'1569683900 IRRX 3772810873\n'+
'1569683901 IRRX 3772782313\n'+
'1569683910 IRRX 3772794553\n'+
'1569683910 IRRX 3772794553\n'+
'1569683917 IRRX 3772794553\n'+
'1569683918 IRRX 3772794553\n'+
'1569683918 IRRX 3772794553\n'+
'1569683923 IRRX 3772810873\n'+
'1569683923 IRRX 3772810873\n'+
'1569683924 IRRX 3772794553\n'+
'1569683924 IRRX 3772794553\n'+
'1569683925 IRRX 3772794553\n'+
'1569683925 IRRX 3772794553\n'+
'1569683925 IRRX 3772794553\n'+
'1569683925 IRRX 3772794553\n'+
'1569683926 IRRX 3772794553\n'+
'1569683926 IRRX 3772794553\n'+
'1569683926 IRRX 3772794553\n'+
'1569683927 IRRX 3772794553\n'+
'1569683927 IRRX 3772794553\n'+
'1569683927 IRRX 3772794553\n'+
'1569683927 IRRX 3772794553\n'+
'1569683928 IRRX 3772778233\n'+
'1569683928 IRRX 3772778233\n'+
'1569683929 IRRX 3772778233\n'+
'1569683929 IRRX 3772778233\n'+
'1569683930 IRRX 3772810873\n'+
'1569683930 IRRX 3772810873\n'+
'1569683931 IRRX 3772794553\n'+
'1569683931 IRRX 3772794553\n'+
'1569683931 IRRX 3772794553\n'+
'1569683931 IRRX 3772794553\n'+
'1569683931 IRRX 3772794553\n'+
'1569683931 IRRX 3772794553\n'+
'1569683932 IRRX 3772794553\n'+
'1569683932 IRRX 3772794553\n'+
'1569683932 IRRX 3772794553\n'+
'1569683933 IRRX 3772782313\n'+
'1569683933 IRRX 3772782313\n'+
'1569683938 IRRX 3772778233\n'+
'1569683938 IRRX 3772778233\n'+
'1569683941 IRRX 3772783333\n'+
'1569683944 IRRX 3772794553\n'+
'1569683944 IRRX 3772794553\n'+
'1569683946 IRRX 3772778233\n'+
'1569683946 IRRX 3772778233\n'+
'1569683946 IRRX 3772794553\n'+
'1569683946 IRRX 3772794553\n'+
'1569683947 IRRX 3772794553\n'+
'1569683948 IRRX 3772782313\n'+
'1569683948 IRRX 3772782313\n'+
'1569683954 IRRX 3772783333\n'+
'1569683957 IRRX 3772810873\n'+
'1569683957 IRRX 3772810873\n'+
'1569683957 IRRX 3772782313\n'+
'1569683958 IRRX 3772782313\n'+
'1569683964 IRRX 3772810873\n'+
'1569683964 IRRX 3772810873\n'+
'1569683965 IRRX 3772810873\n'+
'1569683966 IRRX 3772810873\n'+
'1569683968 IRRX 3772778233\n'+
'1569683968 IRRX 3772778233\n'+
'1569683968 IRRX 3772778233\n'+
'1569683969 IRRX 3772778233\n'+
'1569683969 IRRX 3772778233\n'+
'1569683969 IRRX 3772778233\n'+
'1569683970 IRRX 3772778233\n'+
'1569683970 IRRX 3772778233\n'+
'1569683970 IRRX 3772778233\n'+
'1569683971 IRRX 3772778233\n'+
'1569683971 IRRX 3772778233\n'+
'1569683972 IRRX 3772782313\n'+
'1569683972 IRRX 3772782313\n'+
'1569683973 IRRX 3772778233\n'+
'1569683974 IRRX 3772778233\n'+
'1569683975 IRRX 3772782313\n'+
'1569683975 IRRX 3772782313\n'+
'1569683978 IRRX 3772778233\n'+
'1569683978 IRRX 3772778233\n'+
'1569683979 IRRX 3772778233\n'+
'1569683979 IRRX 3772778233\n'+
'1569683980 IRRX 3772778233\n'+
'1569683980 IRRX 3772778233\n'+
'1569683981 IRRX 3772782313\n'+
'1569683981 IRRX 3772782313\n'+
'1569683985 IRRX 3772810873\n'+
'1569683985 IRRX 3772810873\n'+
'1569683986 IRRX 3772782313\n'+
'1569683986 IRRX 3772782313\n'+
'1569683990 IRRX 3772794553\n'+
'1569683994 IRRX 3772794553\n'+
'1569683994 IRRX 3772794553\n'+
'1569683994 IRRX 3772794553\n'+
'1569683994 IRRX 3772794553\n'+
'1569683994 IRRX 3772794553\n'+
'1569683995 IRRX 3772794553\n'+
'1569683995 IRRX 3772794553\n'+
'1569683995 IRRX 3772794553\n'+
'1569683995 IRRX 3772794553\n'+
'1569683995 IRRX 3772794553\n'+
'1569683997 IRRX 3772782313\n'+
'1569683997 IRRX 3772782313\n'+
'1569684000 IRRX 3772810873\n'+
'1569684000 IRRX 3772810873\n'+
'1569684001 IRRX 3772794553\n'+
'1569684001 IRRX 3772794553\n'+
'1569684002 IRRX 3772794553\n'+
'1569684009 IRRX 3772782313\n'+
'1569684009 IRRX 3772782313\n'+
'1569684030 IRRX 3772783333\n'+
'1569684030 IRRX 3772783333\n'+
'1569684032 IRRX 3772783333\n'+
'1569684034 IRRX 3772783333\n'+
'1569684034 IRRX 3772783333\n'+
'1569684035 IRRX 3772816993\n'+
'1569684035 IRRX 3772816993\n'+
'1569684037 IRRX 3772819033\n'+
'1569684037 IRRX 3772819033\n'+
'1569684047 IRRX 3772782313\n'+
'1569684047 IRRX 3772782313\n'+
'1569684048 IRRX 3772816993\n'+
'1569684050 IRRX 3772819033\n'+
'1569684050 IRRX 3772819033\n'+
'1569684051 IRRX 3772819033\n'+
'1569684052 IRRX 3772819033\n'+
'1569684052 IRRX 3772819033\n'+
'1569684053 IRRX 3772819033\n'+
'1569684054 IRRX 3772778233\n'+
'1569684054 IRRX 3772778233\n'+
'1569684055 IRRX 3772782313\n'+
'1569684056 IRRX 3772782313\n'+
'1569684668 RFRX 11873818\n'+
'1569684686 RFRX 11873818\n'+
'1569685691 RFRX 12429082\n'+
'1569685699 RFRX 12447514\n'+
'1569685728 RFRX a2916227\n'+
'1569685868 RFRX 4731121\n'+
'1569686225 RFRX 9004610\n'+
'1569686264 IRRX 3772793023\n'+
'1569686644 RFRX 12447514\n'+
'1569687247 RFRX 3473666\n'+
'1569687838 IRRX 3782891687\n'+
'1569687848 IRRX 3782891687\n'+
'1569687861 IRRX 3782891687\n'+
'1569687866 IRRX 3782891687\n'+
'1569687875 IRRX 3772816993\n'+
'1569687875 IRRX 3772816993\n'+
'1569687875 IRRX 3772816993\n'+
'1569687877 IRRX 3772819033\n'+
'1569687878 IRRX 3772794553\n'+
'1569687879 IRRX 3772794553\n'+
'1569687880 IRRX 3772794553\n'+
'1569687880 IRRX 3772794553\n'+
'1569687880 IRRX 3772794553\n'+
'1569687880 IRRX 3772794553\n'+
'1569687882 IRRX 3772778233\n'+
'1569687882 IRRX 3772778233\n'+
'1569687883 IRRX 3772794553\n'+
'1569687884 IRRX 3772782313\n'+
'1569687884 IRRX 3772782313\n'+
'1569687888 IRRX 3772782313\n'+
'1569687888 IRRX 3772782313\n'+
'1569687940 IRRX 3772782313\n'+
'1569687940 IRRX 3772782313\n'+
'1569688311 RFRX 9874202\n'+
'1569688311 RFRX 8825626\n'+
'1569688960 RFRX 12054107\n'+
'1569689074 RFRX 10252826\n'+
'1569689079 RFRX 10252826\n'+
'1569689184 IRRX 3772782313\n'+
'1569689184 IRRX 3772782313\n'+
'1569689265 RFRX 11055617\n'+
'1569689711 RFRX 10607770\n'+
'1569690510 IRRX 3772783333\n'+
'1569690510 IRRX 3772783333\n'+
'1569690511 IRRX 3772816993\n'+
'1569690511 IRRX 3772816993\n'+
'1569690768 RFRX 5091842\n'+
'1569691209 RFRX 10277378\n'+
'1569692537 RFRX 11476633\n'+
'1569692559 RFRX 11691345\n'+
'1569692559 RFRX 617290\n'+
'1569693260 RFRX 10633250\n'+
'1569693261 RFRX 10633250\n'+
'1569693745 RFRX 12227818\n'+
'1569693925 RFRX 10923802\n'+
'1569694495 RFRX 10028394\n'+
'1569694791 RFRX 12054105\n'+
'1569694808 RFRX 12054105\n'+
'1569694812 IRRX 3772793023\n'+
'1569694812 IRRX 3772793023\n'+
'1569694830 IRRX 3772783333\n'+
'1569694850 IRRX 3772819033\n'+
'1569694850 IRRX 3772819033\n'+
'1569694851 IRRX 3772819033\n'+
'1569694851 IRRX 3772819033\n'+
'1569694851 IRRX 3772819033\n'+
'1569694851 IRRX 3772819033\n'+
'1569694852 IRRX 3772778233\n'+
'1569694853 IRRX 3772778233\n'+
'1569694853 IRRX 3772782313\n'+
'1569694853 IRRX 3772782313\n'+
'1569694861 IRRX 3782912087\n'+
'1569694864 IRRX 3782881487\n'+
'1569694866 IRRX 3782881487\n'+
'1569694867 IRRX 3782922287\n'+
'1569694868 IRRX 3782922287\n'+
'1569694869 IRRX 3782922287\n'+
'1569694872 IRRX 3782922287\n'+
'1569694875 IRRX 3782922287\n'+
'1569695013 IRRX 3782871287\n'+
'1569695029 IRRX 3782891687\n'+
'1569695034 IRRX 3782881487\n'+
'1569695036 IRRX 3782881487\n'+
'1569695038 IRRX 3782881487\n'+
'1569695040 IRRX 3782881487\n'+
'1569695425 RFRX 11803038\n'+
'1569695879 RFRX 9231366\n'+
'1569695886 RFRX 3481862\n'+
'1569696326 RFRX 12447514\n'+
'1569698959 IRRX 3782912087\n'+
'1569698994 RFRX 229018\n'+
'1569699006 RFRX 8593050\n'+
'1569699617 RFRX 686329\n'+
'1569699620 RFRX 669937\n'+
'1569699647 RFRX 9058547\n'+
'1569699718 localPingErrCnt\n'+
'1569700135 RFRX 11185969\n'+
'1569700423 RFRX 10633250\n'+
'1569701068 RFRX 10741273\n'+
'1569701391 RFRX 10002749\n'+
'1569701823 RFRX 3473666\n'+
'1569701837 RFRX 3474826\n'+
'1569701838 RFRX 3473666\n'+
'1569702445 RFRX 12054137\n'+
'1569702603 RFRX 11030554\n'+
'1569702946 IRRX 3782871287\n'+
'1569702948 IRRX 3782891687\n'+
'1569702950 IRRX 3782891687\n'+
'1569702951 IRRX 3782891687\n'+
'1569703031 IRRX 3782891687\n'+
'1569703033 IRRX 3782891687\n'+
'1569703035 IRRX 3782891687\n'+
'1569703053 RFRX a6390775\n'+
'1569703097 IRRX 3782912087\n'+
'1569703108 IRRX 3782912087\n'+
'1569703115 IRRX 3782883527\n'+
'1569703116 IRRX 3782883527\n'+
'1569703118 IRRX 3782883527\n'+
'1569703119 IRRX 3782883527\n'+
'1569703120 IRRX 3782883527\n'+
'1569703121 IRRX 3782883527\n'+
'1569703123 IRRX 3782924327\n'+
'1569703123 IRRX 3782891687\n'+
'1569703128 IRRX 3782891687\n'+
'1569703130 IRRX 3782891687\n'+
'1569703132 IRRX 3782891687\n'+
'1569703136 IRRX 3782891687\n'+
'1569703139 IRRX 3782891687\n'+
'1569703142 IRRX 3782891687\n'+
'1569703144 IRRX 3782891687\n'+
'1569703147 IRRX 3782891687\n'+
'1569703153 IRRX 3772816993\n'+
'1569703153 IRRX 3772816993\n'+
'1569703154 IRRX 3772794553\n'+
'1569703154 IRRX 3772794553\n'+
'1569703155 IRRX 3772794553\n'+
'1569703155 IRRX 3772794553\n'+
'1569703155 IRRX 3772794553\n'+
'1569703156 IRRX 3772778233\n'+
'1569703156 IRRX 3772778233\n'+
'1569703157 IRRX 3772794553\n'+
'1569703157 IRRX 3772794553\n'+
'1569703158 IRRX 3772782313\n'+
'1569703158 IRRX 3772782313\n'+
'1569703162 IRRX 3772782313\n'+
'1569703162 IRRX 3772782313\n'+
'1569703287 IRRX 3772782313\n'+
'1569703544 RFRX 9644106\n'+
'1569703584 RFRX 9644106\n'+
'1569704040 RFRX 12242154\n'+
'1569704462 RFRX 15946622\n'+
'1569704827 RFRX a7775118\n'+
'1569704827 RFRX 12242154\n'+
'1569704839 RFRX 12242154\n'+
'1569704840 RFRX 11193578\n'+
'1569704841 RFRX 12250346\n'+
'1569704983 RFRX 11185969\n'+
'1569705194 RFRX 12230298\n'+
'1569705207 RFRX 12230298\n'+
'1569706253 RFRX 9056490\n'+
'1569706315 RFRX 10721401\n'+
'1569706332 RFRX 7795827\n'+
'1569706334 RFRX 7795810\n'+
'1569707114 IRRX 3772782313\n'+
'1569707114 IRRX 3772782313\n'+
'1569707347 RFRX 11476633\n'+
'1569707928 RFRX 10669539\n'+
'1569708116 RFRX 9830462\n'+
'1569708432 RFRX 10645561\n'+
'1569708434 RFRX 10645530\n'+
'1569708449 RFRX 10645530\n'+
'1569708526 RFRX 10669537\n'+
'1569708819 RFRX 12765855\n'+
'1569708819 RFRX 11055617\n'+
'1569708916 RFRX 12092650\n'+
'1569709284 RFRX 10923802\n'+
'1569710003 RFRX 12242154\n'+
'1569710005 RFRX 12241962\n'+
'1569710005 RFRX 12242154\n'+
'1569710013 RFRX 12242154\n'+
'1569710013 RFRX 10145002\n'+
'1569710014 RFRX 12242154\n'+
'1569710016 RFRX 12242155\n'+
'1569711330 RFRX 9489818\n'+
'1569711670 RFRX 11030554\n'+
'1569711670 RFRX 2641946\n'+
'1569712049 RFRX 14422545\n'+
'1569712049 RFRX 222791\n'+
'1569712144 RFRX 3708418\n'+
'1569712292 IRRX 3772783333\n'+
'1569712292 IRRX 3772783333\n'+
'1569712292 IRRX 3772783333\n'+
'1569712295 IRRX 3772782313\n'+
'1569712295 IRRX 3772782313\n'+
'1569712297 IRRX 3772783333\n'+
'1569712297 IRRX 3772783333\n'+
'1569712299 IRRX 3772783333\n'+
'1569712299 IRRX 3772783333\n'+
'1569712299 IRRX 3772783333\n'+
'1569712301 IRRX 3772816993\n'+
'1569712301 IRRX 3772816993\n'+
'1569712302 IRRX 3772819033\n'+
'1569712303 IRRX 3772819033\n'+
'1569712304 IRRX 3772819033\n'+
'1569712304 IRRX 3772819033\n'+
'1569712305 IRRX 3772778233\n'+
'1569712305 IRRX 3772778233\n'+
'1569712306 IRRX 3772782313\n'+
'1569712314 IRRX 3782893727\n'+
'1569712314 IRRX 3782893727\n'+
'1569712314 IRRX 3782893727\n'+
'1569712319 IRRX 3782891687\n'+
'1569712324 IRRX 3782891687\n'+
'1569712328 IRRX 3782891687\n'+
'1569712331 IRRX 3782891687\n'+
'1569712333 IRRX 3782891687\n'+
'1569712338 IRRX 3782891687\n'+
'1569712339 IRRX 3782891687\n'+
'1569712342 IRRX 3782891687\n'+
'1569712347 IRRX 3782914127\n'+
'1569712351 IRRX 3782881487\n'+
'1569712353 IRRX 3782881487\n'+
'1569712355 IRRX 3782881487\n'+
'1569712362 IRRX 3782881487\n'+
'1569712363 IRRX 3782881487\n'+
'1569712365 IRRX 3782881487\n'+
'1569712367 IRRX 3782912087\n'+
'1569712370 IRRX 3782891687\n'+
'1569712395 IRRX 3782891687\n'+
'1569712399 IRRX 3782891687\n'+
'1569712403 IRRX 3782891687\n'+
'1569712406 IRRX 3782891687\n'+
'1569712410 IRRX 3782891687\n'+
'1569712415 IRRX 3782891687\n'+
'1569712399 IRRX 3782891687\n'+
'1569712403 IRRX 3782891687\n'+
'1569712406 IRRX 3782891687\n'+
'1569712410 IRRX 3782891687\n'+
'1569712415 IRRX 3782891687\n'+
'1569712419 IRRX 3782891687\n'+
'1569712434 IRRX 3782891687\n'+
'1569712421 IRRX 3782891687\n'+
'1569712425 IRRX 3782891687\n'