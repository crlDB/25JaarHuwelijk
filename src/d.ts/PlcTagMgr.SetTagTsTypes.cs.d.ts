declare module server {
	interface poFromWriteTags {
		lti: any[];
		cliIp: string;
		cliNbr: number;
		cliUsr: string;
		cliAct: number;
		cliItem: number;
		cliAct2: string;
	}
	interface poFromWriteTag {
		/** tag-id (object.tag) */
		tid: string;
		/** tagindex */
		tn: string;
		/** tag-waarde */
		tw: string;
		/** type =,W,S,R */
		ty: string;
	}
	interface poAlarms {
		poAlarmArr: {
			alarmOn: boolean;
			alarmText: string;
		}[];
	}
	interface poAlarm {
		alarmOn: boolean;
		alarmText: string;
	}
	interface poV2Alarms {
		poAlarmArr: {
			alarmDate: Date;
			alarmOn: boolean;
			alarmText: string;
			classNbr: number;
		}[];
		poAlarmClassArr: {
			classText: string;
		}[];
	}
	interface poV2Alarm {
		alarmDate: Date;
		alarmOn: boolean;
		alarmText: string;
		classNbr: number;
	}
	interface poV2AlarmClass {
		classText: string;
	}
	interface poMsgs {
		poMsgArr: {
			msgOn: boolean;
			msgText: string;
		}[];
	}
	interface poMsg {
		msgOn: boolean;
		msgText: string;
	}
	interface poV2Msgs {
		poMsgArr: {
			msgDate: Date;
			msgOn: boolean;
			msgText: string;
			classNbr: number;
		}[];
		poMsgClassArr: {
			classText: string;
		}[];
	}
	interface poV2Msg {
		msgDate: Date;
		msgOn: boolean;
		msgText: string;
		classNbr: number;
	}
	interface poV2MsgClass {
		classText: string;
	}
	interface poWebObjs {
		poWebObjArr: {
			webObjSymbol: string;
			webObjText: string;
		}[];
	}
	interface poWebObj {
		webObjSymbol: string;
		webObjText: string;
	}
	interface poWebUsers {
		poWebUserArr: {
			userLogin: string;
			plcLevel: number;
			webLevel: number;
		}[];
	}
	interface poWebUser {
		userLogin: string;
		plcLevel: number;
		webLevel: number;
	}
	interface poClientInfo {
		poClientIp: string;
		poClientNbr: number;
		poClientSymbol: string;
		poServerIp: string;
    }

    interface poTxtLists {
        poTxtListData: poTxtListData[];
    }

    interface poTxtListData {
        nbrList: number;
        nbrTxt: number;
        txt: string;
    }


}
