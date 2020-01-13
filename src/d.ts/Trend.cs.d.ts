declare module server {

    interface toCliTrend {
        x: number[];
        trend: server.trendY[];
        trendDate: string;
        trendTime: string;
    }
    interface toCliTrendLoc {
        x: server.trendX[];
        y: server.trendY[];
        trendDate: string;
        trendTime: string;
        curveStatus: string;
        csvFile: string;
        dataKoppel: number[];
    }
    interface trendX {
        trendName: string;
        x: number[];
    }
    interface trendY {
        trendName: string;
        y: number[];
    }
    interface toViewTrend {
        trd: server.toViewTrendInfo[];
        date: string;
        time: string;
    }
    interface toViewTrendInfo {
        trendId: number;
        trendSymbol: string;
        trendSelectPos: number;
    }
    interface toSrvLoadTrend {
        trendCmd: server.trendCmd;
        trendRange: number;
        trendWidth: number;
        trendDate: string;
        trendTime: string;
        trendIds: number[];
    }
    const enum trendCmd {
        first = 1,
        prev,
        next,
        last,
        refresh,
    }



}
