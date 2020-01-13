declare module server {
    interface toCliParam {
        par: server.param[];
        parCs: server.paramCs[];
        parClassCs: server.paramClassCs[];
        paramDate: string;
        paramTime: string;
        paramPeriod: string;
    }
    interface param {
        date: number;
        g1: string;
        g2: string;
        g3: string;
        parVal: number;
        parNbr: number;
    }
    interface paramCs {
        parCsId: number;
        symbol: string;
        text: string;
    }
    interface paramClassCs {
        classId: number;
        symbol: string;
        text: string;
    }
    interface toViewParam {
        date: string;
        time: string;
        period: string;
    }
    interface toSrvLoadParam {
        parCmd: server.paramCmd;
        parRange: number;
        parDate: string;
        parTime: string;
    }
    const enum paramCmd {
        first = 1,
        prev,
        next,
        last,
        refresh,
    }



}
