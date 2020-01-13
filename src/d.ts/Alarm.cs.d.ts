declare module server {
    interface toCliAlarm {
        alm: server.alarm[];
        alarmDate: string;
        alarmTime: string;
        alarmPeriod: string;
        almDef: {
            poAlarmArr: {
                alarmDate: Date;
                alarmOn: boolean;
                alarmText: string;
                classNbr: number;
            }[];
            poAlarmClassArr: {
                classText: string;
            }[];
        };
    }
    interface alarm {
        date: number;
        g1: string;
        g2: string;
        g3: string;
        almNbr: number;
        almDur: number;
    }
    interface toViewAlarm {
        date: string;
        time: string;
        period: string;
    }
    interface toSrvLoadAlarm {
        almCmd: server.alarmCmd;
        almRange: number;
        almDate: string;
        almTime: string;
    }
    const enum alarmCmd {
        first = 1,
        prev,
        next,
        last,
        refresh,
    }
}
