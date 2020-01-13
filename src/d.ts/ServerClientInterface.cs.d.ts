declare module server {
	const enum viewType {
		unknown,
		grid,
		graph1,
		graph2,
		graph3,
		graph4,
	}
	interface hotColPar {
		colName: string;
		colType: string;
		colDataIndex: number;
		colVisible: boolean;
		colReadOnly: boolean;
		colWidth: number;
		colNumericFormat: string;
		colNumericLang: string;
		colRenderer: string;
		colSource: string[];
		colAllowEmpty: boolean;
		colAllowInvalid: boolean;
		colAutoCompleteStrict: boolean;
		colAutoCompleteTrimDropdown: boolean;
		colAutoCompleteVisibleRows: number;
		colCheckboxTemplateOn: string;
		colCheckboxTemplateOff: string;
		colCheckboxLabel: string;
		colCheckboxLabelPos: string;
		colDateFormat: string;
		colDateCorrectFormat: boolean;
		colDefaultDate: string;
		colDatePickFirstDate: number;
		colDatePickShowWeekNbr: boolean;
		colDatePickNbrMonth: number;
	}
	interface filterPanel {
		filterCols: server.FilterCol[];
	}
	interface filterCol {
		colNaam: string;
		filterActief: boolean;
		filterType: string;
		filterData: string;
		colNr: number;
	}
	interface showHideColPanel {
		visibleCols: server.ShowHideCol[];
	}
	interface showHideCol {
		colNrSql: number;
		colNaam: string;
		visible: boolean;
	}
	interface generalPanel {
		generalPars: server.GeneralPar[];
	}
	interface generalPar {
		parName: string;
		parValue: string;
	}
	interface toSrvLoad {
		toSrvLoadGrid: server.ToSrvLoadGrid;
		toSrvSaveGrid: server.ToSrvSaveGrid;
		toSrvFilter: server.FilterCol[];
		toSrvShowHideCol: server.ShowHideCol[];
		toSrvGeneralPar: server.GeneralPar[];
		toSrvPage: server.ToSrvPage;
		toSrvSort: server.ToSrvSort;
		toSrvLayoutCols: server.ToSrvLayoutCols;
		toSrvLoadNodeTree: server.ToSrvLoadNodeTree;
		toSrvDelete: server.ToSrvDelete;
		toSrvLogInOff: server.ToSrvLogInOff;
        toSrvUserInfo: server.UserInfo;
        toSrvClientInfo: server.clientInfo;
        toSrvForceReloadTable: boolean;

		/** data added after receiving from client **/
		dataInMem: server.DataInMem;
	}
	interface hotCfg {
		tableCfgAllD: { [index: number]: any };
		tableCfgUserD: { [index: number]: any };
		tableFilterUserD: { [index: number]: any };
		tableSortUserD: { [index: number]: any };
		tablePageUserD: { [index: number]: any };
	}
	interface tableFilterUserDictionary {
		tableFilterUserD: { [index: string]: any };
	}
	interface tableFilterUserList {
		tableFilterUserL: server.TableFilterUser[];
	}
	interface tableFilterUser {
		colFilterAllow: boolean;
		colFilterNumbSql: number;
		colFilterActive: boolean;
		colFilterType: string;
		colFilterData: string;
		changed: boolean;
	}
	interface tableSortUserDictionary {
		tableSortUserD: { [index: string]: any };
	}
	interface tableSortUserList {
		tableSortUserL: server.TableSortUser[];
	}
	interface tableSortUser {
		colSortNumbSql: number;
		colSortOrder: boolean;
		changed: boolean;
	}
	interface tablePageUserDictionary {
		tablePageUserD: { [index: string]: any };
	}
	interface tablePageUserList {
		tablePageUserL: server.TablePageUser[];
	}
	interface tablePageUser {
		currentPage: number;
		maxRecPage: number;
		changed: boolean;
	}
	interface tableCfgUserDictionary {
		tableCfgUserD: { [index: string]: any };
	}
	interface tableCfgUserList {
		tableCfgUserL: server.TableCfgUser[];
	}
	interface tableCfgUser {
		/** public int ColNumberHot { get; set; } */
		colNumberSql: number;
		colWidth: number;
		colVisible: boolean;
		changed: boolean;
	}
	interface tableCfgAllList {
		tableCfgAllL: server.TableCfgAll[];
	}
	interface tableCfgAll {
		colName: string;
		colSqlNumber: number;
		colReadOnly: boolean;
		colType: string;
		colRenderer: string;
		colSource: string[];
		colAllowInvalid: boolean;
		colAllowEmpty: boolean;
		colAutoCompleteStrict: boolean;
		colAutoCompleteVisibleRows: number;
		colAutoCompleteTrimDropdown: boolean;
		colNumericFormat: string;
		colNumericLang: string;
		colCheckboxTemplateOn: string;
		colCheckboxTemplateOff: string;
		colCheckboxLabel: string;
		colCheckboxLabelPos: string;
		colDateFormat: string;
		colDateCorrectFormat: boolean;
		colDefaultDate: string;
		colDatePickFirstDate: number;
		colDatePickShowWeekNbr: boolean;
		colDatePickNbrMonth: number;
	}
	interface dataInMem {
		tableCfgAllL_Active: server.TableCfgAllList;
		tableCfgAllL_Asked: server.TableCfgAllList;
		tableCfgUserL_Active: server.TableCfgUserList;
		tableCfgUserL_Asked: server.TableCfgUserList;
		tableFilterUserL_Asked: server.TableFilterUserList;
		tableSortUserL_Asked: server.TableSortUserList;
		tablePageUserL_Asked: server.TablePageUserList;
		createTextList: boolean;
		createConvertionNumberID: boolean;
	}
	interface toCliLoad {
		toClTableNum: number;
		toClViewType: server.ViewType;
		toClTableColPar: server.HotColPar[];
		toClTableData: any[];
		toClConfig: server.ToSrvConfigColumns[];
		toCliStatus: number;
		toCliPreSelectie: string[];
		toCliPage: server.ToCliPage;
		toCliSort: server.ToCliSort;
		toCliInfoHearderGrid: string;
		toCliLoadNodeTree: server.ToCliLoadNodeTree;
		toCliSaveGrid: server.ToCliSaveGrid;
		toCliDelete: server.ToCliDelete;
        toCliLogInOff: server.ToCliLogInOff;
        toCliClientInfo: server.clientInfo;
		toCliGraph1: server.ToCliGraph1;
		toCliGraph2: server.ToCliGraph2;
        toCliGraph3: server.ToCliGraph3;
        toCliUserLevelOK: boolean;
	}
	interface toSrvCopy {
		toSrvCopyGrid: server.ToSrvCopyGrid;
		toSrvSaveGrid: server.ToSrvSaveGrid;
	}
	interface toSrvCopyGrid {
		toSrvTableNum: number;
		toSrvIndexToCpy: number[];
	}
	interface toCliCopy {
		toClTableNum: number;
		toClTableColPar: server.HotColPar[];
		toClTableData: any[];
		toClConfig: server.ToSrvConfigColumns[];
		toCliPreSelectie: string[];
	}
	interface toSrvUploadFromPlc {
		recId: number;
	}
	interface toCliUploadFromPlc {
		status: string;
	}
	interface toSrvLoadPanel {
		toSrvTableNum: number;
		toSrvUserInfo: server.UserInfo;
	}
	interface toSrvShowHideColData {
		colNrSql: number;
		colNaam: string;
		visible: boolean;
	}
	interface toSrvLoadFilterPartial {
		toSrvTableNum: number;
	}
	interface toSrvFilterData {
		filterActief: boolean;
		filterType: string;
		filterData: string;
		colNr: string;
	}
	interface toSrvPage {
		toSrvPageCmd: number;
		toSrvPageNr: number;
	}
	interface toCliPage {
		toCliPageActive: number;
		toCliLastPage: number;
	}
	interface toSrvSort {
		toSrvColName: string;
	}
	interface toCliSort {
		orderStatus: number;
		toCliSortedColNr: number;
		toCliSortedOrder: boolean;
	}
	interface toSrvLayoutCols {
		toSrvResetLayout: boolean;
		toSrvLayoutCol: server.ToSrvLayoutCol[];
	}
	interface toSrvLayoutCol {
		toSrvColWidth: number;
		toSrvSqlColNmb: number;
		toSrvSqlColName: string;
	}
	interface toSrvDelete {
		toSrvRecId: number[];
	}
	interface toCliDelete {
		deleteStatus: number;
	}
	interface toSrvRecId {
		toSrvRcId: number[];
	}
	interface toCliGraph1 {
		graph1: server.Graph1[];
	}
	interface graph1 {
		stationName: string;
		alarmNumber: number;
		alarmSymbol: string;
		alarmText: string;
		alarmCount: number;
	}
	interface toCliGraph2 {
		graph2: server.Graph2[];
	}
	interface graph2 {
		stationName: string;
		alarmNumber: number;
		alarmSymbol: string;
		alarmText: string;
		alarmDurationSec: number;
		alarmDurationText: string;
	}
	interface toCliGraph3 {
		graph3: server.Graph3[];
	}
	interface graph3 {
		value1: number;
		value2: number;
		info1: string;
		info2: string;
	}
	interface toSrvLoadGrid {
		toSrvAskedTableNum: number;
		toSrvActiveTableNum: number;
		toSrvAskedViewType: server.ViewType;
		toSrvActiveViewType: server.ViewType;
		toSrvPreSelection: string[];
	}
	interface toSrvSaveGrid {
		toSrvTableNum: number;
		toSrvPreSelectie: string[];
		toSrvTableData: server.ToSrvSaveData[];
	}
	interface toSrvSaveData {
		nr: number;
		id: number[];
		val: string;
		rec: number;
		colName: string;
	}
	interface toSrvConfigColumns {
		colNr: number;
		colName: string;
		colSqlName: string;
		colSqlType: string;
	}
	interface toSrvTreeAddFolder {
		toSrvLevel: number;
		toSrvParentFolders: server.TreeNode[];
		toSrvFolderName: string;
	}
	interface toCliTreeAddFolder {
		toCliNewFolder: server.TreeNode;
	}
	interface toCliTreeLoad {
		treePlc: server.tree[];
		foutCode: number;
	}
	interface tree {
	}
	interface treeNode extends tree {
		title: string;
		key: string;
		folder: boolean;
	}
	interface treeFolderWithChilderen extends tree {
		title: string;
		key: string;
		folder: boolean;
		checkFolderData: boolean;
		icon: string;
		children: server.TreeFolderWithChilderen[];
	}
	interface treeFolderChilderen extends tree {
		title: string;
		key: string;
		folder: boolean;
		children: server.TreeChildNode[];
	}
	interface treeChildNode {
		title: string;
		key: string;
	}
	interface toSrvLoadNodeTree {
		toSrvNodeKey: string;
		toSrvLevel: number;
		toSrvParentFolders: server.TreeNode[];
		toSrvFolderName: string;
	}
	interface toCliLoadNodeTree {
		treeNodes: server.TreeFolderWithChilderen[];
		status: string;
	}
	interface toSrvDeleteEmptyRows {
		tableNr: number;
	}
	interface toCliDeleteEmptyRows {
		toClStatus: string;
	}
	interface toSrvCommand {
		toSrvTableNum: number;
		toSrvPreSelectie: string[];
		toSrvCmd: number;
        toSrvRecId: server.ToSrvRecId;
        toSrvUser: server.userInfo;
        toSrvClientInfo: server.clientInfo;
	}
	interface toCliCommand {
		toCliReloadPlease: boolean;
		toCliCmd: number;
		toCliFaultNbr: number;
		toCliFaultString: string;
		toCliSuccessNbr: number;
		toCliSuccessString: string;
	}
	interface toSrvCmdRT {
		toSrvCmd: number;
	}
	interface toCliCmdRT {
		toCliCmd: number;
		toCliFaultNbr: number;
		toCliFaultString: string;
		toCliSuccessNbr: number;
		toCliSuccessString: string;
	}
	interface toCliSaveGrid {
		toCliSave: server.ToCliSave;
	}
	interface toCliSave {
		toCliTableNum: number;
	}
	interface toSrvLogInOff {
		toSrvLogNameOld: string;
		toSrvLogNameNew: string;
		toSrvPassWordNew: string;
	}
	interface toCliLogInOff {
		toCliUserInfo: server.UserInfo;
	}
    interface userInfo {
        toCliUserId: number;
		toCliLogName: string;
        toCliWebLevel: number;
        toCliPlcLevel: number;
    }
    interface clientInfo {
        toCliClientId: number;
        toCliNbr: number;
        toCliIp: string;
        toCliName: string;
    }
	interface toSrvLogInOffRT {
		toSrvClientIpAddress: string;
		toSrvClientNbr: number;
		toSrvAction: number;
		toSrvAction2: string;
		toSrvItemNbr: number;
		toSrvLogName: string;
		toSrvPassWord: string;
		toSrvLogIn: boolean;
	}
	interface toCliLogInOffRT {
		toCliLogName: string;
		toCliWebLevel: number;
		toCliPlcLevel: number;
	}
	interface toSrvFilterOrdes {
		filterRust: boolean;
		filterAnnul: boolean;
		filterLabo: boolean;
		filterStart: boolean;
		filterWacht: boolean;
		filterKlein: boolean;
		filterGroot: boolean;
	}
}
