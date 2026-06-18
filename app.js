// ─── Internationalisation ─────────────────────────────────────────────────────

const I18N = {
  "en-US": {
    // Sidebar brand
    appSubtitle: "Power BI lineage explorer",

    // Upload zone
    uploadTitle: "Select PBIX",
    uploadCopy: "The file is analysed locally in the browser.",

    // Toolbar buttons
    btnDemo: "Demo",
    btnDemoTitle: "Load demo",
    btnPbix: "PBIX",
    btnPbixTitle: "Return to loaded PBIX",
    btnJson: "JSON",
    btnJsonTitle: "Export JSON",
    btnPng: "Export image",
    btnPngTitle: "Export PNG image",
    btnDocx: "Export documentation",
    btnDocxTitle: "Export Word documentation",
    docxNoPbix: "Load a PBIX file before exporting documentation.",
    docxGenerating: "Generating documentation...",
    docxError: "Could not export the documentation. See console for details.",

    // Summary panel
    panelSummary: "Summary",
    metricSources: "Sources",
    metricQueries: "Queries",
    metricNodes: "Nodes",
    metricImpact: "Impact",

    // Filters panel
    panelFilters: "Filters",

    // Lineage panel
    panelLineage: "Lineage",
    lineageToggleStrong: "Filter by lineage",
    lineageToggleSpan: "Click a node to see its full lineage only",

    // Details panel
    panelDetails: "Details",
    detailsPlaceholder: "Select a node to see its origin, dependencies and impact.",

    // Workspace header
    workspaceTitle: "Lineage Map",
    workspaceSubtitle: "Load a PBIX or use the demo to get started.",

    // Tabs
    tabMap: "Map",
    tabRelationships: "Relationships",
    tabArchitecture: "Architecture",
    tabPages: "Pages",

    // Legend
    legendSource: "Source",
    legendQuery: "Query",
    legendModel: "Model",
    legendMeasure: "Measure",
    legendCalcColumn: "Calc. Column",
    legendVisual: "Visual",
    // Empty states
    emptyTitle: "Start with your PBIX file",
    emptyBody: "The app detects connectors, queries, tables and report signals when this information exists in the package.",
    relEmptyTitle: "No relationships found",
    relEmptyBody: "Load a PBIX file analysed by the backend to see model relationships.",

    archEmptyTitle: "No data sources found",
    archEmptyBody: "Load a PBIX file to see the connection architecture diagram.",
    pagesEmptyTitle: "No pages found",
    pagesEmptyBody: "Load a PBIX file to see the report pages.",
    tabPages: "Pages",
    pagesVisualsLabel: (n) => `${n} visual${n !== 1 ? "s" : ""}`,
    pagesCanvasLabel: (w, h) => `${w} × ${h} px`,
    archPbiLabel: "Power BI Dataset",
    archNoQueries: "No queries mapped",
    archSourcesCount: (n) => `${n} data source${n !== 1 ? "s" : ""} connected`,

    // Node type labels
    typeSource: "Source",
    typeQuery: "Query",
    typeModel: "Model",
    typeMeasure: "Measure",
    typeCalcColumn: "Calc. Column",
    typeVisual: "Visual",

    // Details panel content
    detailsDirectDeps: "Direct dependencies:",
    detailsImpacted: "Impacted nodes:",
    detailsAffects: "Affects:",

    // Relationship table headers
    relFromTable: "Source Table",
    relFromCol: "Source Column",
    relToTable: "Target Table",
    relToCol: "Target Column",
    relCardinality: "Cardinality",
    relCrossFilter: "Cross Filter",
    relActive: "Active",
    relInactive: "Inactive",
    relTableAriaLabel: "Relationships table",
    relNoData: "No relationships available.",

    // Loading / error messages
    loadingAnalysing: (name) => `Analysing ${name}…`,
    loadingNoBackend: "No entries found in package.",
    loadingError: "Could not read this PBIX. See console for details.",
    loadingEntries: (n, extra) => `${n} entries read from PBIX package${extra}.`,
    loadingNestedExtra: (n) => ` + ${n} internal DataMashup entries`,

    // Export image footer
    exportTimestamp: () => new Date().toLocaleString("en-US"),

    // Demo data
    demoTitle: "Demo Lineage",
    demoSubtitle: "Demo with sources, queries, model, measures and visuals.",
    demoQuery1Expr: "Sql.Database(...) with fiscal calendar merge",
    demoQuery2Expr: "Excel.Workbook(...) for monthly targets",
    demoQuery3Expr: "Web.Contents(...) for exchange rates",
    demoCross1: "Single",
    demoCross2: "Bidirectional",
    demoCross3: "Single",
    demoCross4: "Single",
    demoCross5: "Single",

    // Language toggle
    langToggleLabel: "Language",
  },

  "pt-BR": {
    appSubtitle: "Power BI lineage explorer",

    uploadTitle: "Selecionar PBIX",
    uploadCopy: "O arquivo é analisado localmente no navegador.",

    btnDemo: "Exemplo",
    btnDemoTitle: "Carregar exemplo",
    btnPbix: "PBIX",
    btnPbixTitle: "Voltar ao PBIX carregado",
    btnJson: "JSON",
    btnJsonTitle: "Exportar JSON",
    btnPng: "Exportar imagem",
    btnPngTitle: "Exportar imagem PNG",
    btnDocx: "Exportar documentacao",
    btnDocxTitle: "Exportar documentacao Word",
    docxNoPbix: "Carregue um arquivo PBIX antes de exportar a documentacao.",
    docxGenerating: "Gerando documentacao...",
    docxError: "Nao foi possivel exportar a documentacao. Veja o console para detalhes.",

    panelSummary: "Resumo",
    metricSources: "Fontes",
    metricQueries: "Queries",
    metricNodes: "Nós",
    metricImpact: "Impacto",

    panelFilters: "Filtros",

    panelLineage: "Linhagem",
    lineageToggleStrong: "Filtrar por linhagem",
    lineageToggleSpan: "Clique em um nó para ver apenas a sua linhagem completa",

    panelDetails: "Detalhes",
    detailsPlaceholder: "Selecione um nó para ver origem, dependências e impacto.",

    workspaceTitle: "Lineage Map",
    workspaceSubtitle: "Carregue um PBIX ou use o exemplo para iniciar.",

    tabMap: "Mapa",
    tabRelationships: "Relacionamentos",
    tabArchitecture: "Arquitetura",
    tabPages: "Páginas",

    legendSource: "Fonte",
    legendQuery: "Query",
    legendModel: "Modelo",
    legendMeasure: "Medida",
    legendCalcColumn: "Col. Calculada",
    legendVisual: "Visual",

    emptyTitle: "Comece pelo arquivo PBIX",
    emptyBody: "O app detecta conectores, queries, tabelas e sinais de relatório quando essas informações existem no pacote.",
    relEmptyTitle: "Nenhum relacionamento encontrado",
    relEmptyBody: "Carregue um arquivo PBIX analisado pelo backend para ver os relacionamentos do modelo.",

    archEmptyTitle: "Nenhuma fonte de dados encontrada",
    archEmptyBody: "Carregue um arquivo PBIX para ver o diagrama de arquitetura de conexões.",
    pagesEmptyTitle: "Nenhuma página encontrada",
    pagesEmptyBody: "Carregue um arquivo PBIX para ver as páginas do relatório.",
    tabPages: "Páginas",
    pagesVisualsLabel: (n) => `${n} visual${n !== 1 ? "is" : ""}`,
    pagesCanvasLabel: (w, h) => `${w} × ${h} px`,
    archPbiLabel: "Dataset Power BI",
    archNoQueries: "Nenhuma query mapeada",
    archSourcesCount: (n) => `${n} fonte${n !== 1 ? "s" : ""} de dados conectada${n !== 1 ? "s" : ""}`,

    typeSource: "Fonte",
    typeQuery: "Query",
    typeModel: "Modelo",
    typeMeasure: "Medida",
    typeCalcColumn: "Col. Calculada",
    typeVisual: "Visual",

    detailsDirectDeps: "Dependências diretas:",
    detailsImpacted: "Nós impactados:",
    detailsAffects: "Afeta:",

    relFromTable: "Tabela Origem",
    relFromCol: "Coluna Origem",
    relToTable: "Tabela Destino",
    relToCol: "Coluna Destino",
    relCardinality: "Cardinalidade",
    relCrossFilter: "Filtro Cruzado",
    relActive: "Ativo",
    relInactive: "Inativo",
    relTableAriaLabel: "Tabela de relacionamentos",
    relNoData: "Nenhum relacionamento disponível.",

    loadingAnalysing: (name) => `Analisando ${name}…`,
    loadingNoBackend: "Nenhuma entrada encontrada no pacote.",
    loadingError: "Não foi possível ler esse PBIX. Veja o console para detalhes.",
    loadingEntries: (n, extra) => `${n} entradas lidas do pacote PBIX${extra}.`,
    loadingNestedExtra: (n) => ` + ${n} entradas internas do DataMashup`,

    exportTimestamp: () => new Date().toLocaleString("pt-BR"),

    demoTitle: "Demo Linhagem",
    demoSubtitle: "Exemplo com fontes, queries, modelo, medidas e visuais.",
    demoQuery1Expr: "Sql.Database(...) com merge em calendário fiscal",
    demoQuery2Expr: "Excel.Workbook(...) para metas mensais",
    demoQuery3Expr: "Web.Contents(...) para cotações",
    demoCross1: "Simples",
    demoCross2: "Bidirecional",
    demoCross3: "Simples",
    demoCross4: "Simples",
    demoCross5: "Simples",

    langToggleLabel: "Idioma",
  }
};

// Active locale — default EN-US, persisted in localStorage
let locale = (localStorage.getItem("bifm-locale") || "en-US");
const t = () => I18N[locale] || I18N["en-US"];

function setLocale(newLocale) {
  locale = newLocale;
  localStorage.setItem("bifm-locale", locale);
  applyI18n();
  renderFilters();          // re-renders filter labels
  renderGraph();            // re-renders node subtitles and details
  if (state.activeTab === "relacionamentos") renderRelationships();
  if (state.activeTab === "arquitetura") renderArchitecture();
  if (state.activeTab === "paginas") renderPages();
}

function applyI18n() {
  const T = t();

  // Brand
  document.querySelector(".brand-block p").textContent         = T.appSubtitle;

  // Upload zone
  document.querySelector(".upload-title").textContent          = T.uploadTitle;
  document.querySelector(".upload-copy").textContent           = T.uploadCopy;

  // Toolbar
  els.demoButton.title = T.btnDemoTitle;
  els.demoButton.querySelector(".btn-text").textContent        = T.btnDemo;
  els.pbixButton.title = T.btnPbixTitle;
  els.pbixButton.querySelector(".btn-text").textContent        = T.btnPbix;
  els.exportButton.title = T.btnJsonTitle;
  els.exportButton.querySelector(".btn-text").textContent      = T.btnJson;
  els.exportImageButton.title = T.btnPngTitle;
  els.exportImageButton.querySelector(".btn-text").textContent = T.btnPng;
  els.exportDocxButton.title = T.btnDocxTitle;
  els.exportDocxButton.querySelector(".btn-text").textContent  = T.btnDocx;

  // Panels headings
  document.getElementById("panelHeadSummary").textContent      = T.panelSummary;
  document.getElementById("panelHeadFilters").textContent      = T.panelFilters;
  document.getElementById("panelHeadLineage").textContent      = T.panelLineage;
  document.getElementById("panelHeadDetails").textContent      = T.panelDetails;

  // Metrics labels
  document.getElementById("metricSources").textContent        = T.metricSources;
  document.getElementById("metricQueries").textContent        = T.metricQueries;
  document.getElementById("metricNodes").textContent          = T.metricNodes;
  document.getElementById("metricImpact").textContent         = T.metricImpact;

  // Lineage toggle
  document.querySelector(".toggle-text strong").textContent    = T.lineageToggleStrong;
  document.querySelector(".toggle-text span").textContent      = T.lineageToggleSpan;

  // Details placeholder (only if no node is selected)
  if (!state.selectedId) {
    els.details.innerHTML = `<p>${T.detailsPlaceholder}</p>`;
  }

  // Workspace header
  // Only reset title/subtitle when they still show the default text
  if (
    els.title.textContent === I18N["en-US"].workspaceTitle ||
    els.title.textContent === I18N["pt-BR"].workspaceTitle
  ) {
    els.title.textContent = T.workspaceTitle;
  }
  if (
    els.subtitle.textContent === I18N["en-US"].workspaceSubtitle ||
    els.subtitle.textContent === I18N["pt-BR"].workspaceSubtitle
  ) {
    setSubtitle(T.workspaceSubtitle);
  }

  // Tabs
  els.tabMapa.textContent             = T.tabMap;
  els.tabRelacionamentos.textContent  = T.tabRelationships;
  els.tabArquitetura.textContent      = T.tabArchitecture;
  els.tabPaginas.textContent          = T.tabPages;

  const pagesEmptyStrong = els.pagesEmpty.querySelector("strong");
  const pagesEmptySpan   = els.pagesEmpty.querySelector("span");
  if (pagesEmptyStrong) pagesEmptyStrong.textContent = T.pagesEmptyTitle;
  if (pagesEmptySpan)   pagesEmptySpan.textContent   = T.pagesEmptyBody;

  // Legend
  const legendSpans = els.mapLegend.querySelectorAll("span");
  const legendKeys  = ["legendSource","legendQuery","legendModel","legendMeasure","legendVisual"];
  legendSpans.forEach((span, i) => {
    const dot = span.querySelector("i");
    span.textContent = " " + T[legendKeys[i]];
    span.prepend(dot);
  });

  // Empty states
  const emptyStrong = els.emptyState.querySelector("strong");
  const emptySpan   = els.emptyState.querySelector("span");
  if (emptyStrong) emptyStrong.textContent = T.emptyTitle;
  if (emptySpan)   emptySpan.textContent   = T.emptyBody;

  const relEmptyStrong = els.relEmpty.querySelector("strong");
  const relEmptySpan   = els.relEmpty.querySelector("span");
  if (relEmptyStrong) relEmptyStrong.textContent = T.relEmptyTitle;
  if (relEmptySpan)   relEmptySpan.textContent   = T.relEmptyBody;

  const archEmptyStrong = els.archEmpty.querySelector("strong");
  const archEmptySpan   = els.archEmpty.querySelector("span");
  if (archEmptyStrong) archEmptyStrong.textContent = T.archEmptyTitle;
  if (archEmptySpan)   archEmptySpan.textContent   = T.archEmptyBody;

  // Lang toggle button state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === locale);
  });
}

// ─── End Internationalisation ─────────────────────────────────────────────────

const CONNECTORS = [
  { pattern: "Sql.Database", name: "SQL Server", icon: "SQL", color: "#2176ae" },
  { pattern: "Excel.Workbook", name: "Excel", icon: "XLS", iconUrl: "assets/connectors/excel-workbook-64.png", color: "#28805a" },
  { pattern: "Web.Contents", name: "Web", icon: "WEB", iconUrl: "assets/connectors/web-64.png", color: "#6f52b8" },
  { pattern: "SharePoint.Files", name: "SharePoint Files", icon: "SP", color: "#2b8f9f" },
  { pattern: "SharePoint.Contents", name: "SharePoint", icon: "SP", color: "#2b8f9f" },
  { pattern: "OData.Feed", name: "OData", icon: "OD", color: "#b23a48" },
  { pattern: "Csv.Document", name: "CSV", icon: "CSV", color: "#d39200" },
  { pattern: "Folder.Files", name: "Folder", icon: "DIR", color: "#4d6b7c" },
  { pattern: "Json.Document", name: "JSON", icon: "JSN", color: "#7a5c1f" },
  { pattern: "AnalysisServices.Database", name: "Analysis Services", icon: "AS", color: "#5266b8" },
  { pattern: "Oracle.Database", name: "Oracle", icon: "ORA", color: "#c3423f" },
  { pattern: "PostgreSQL.Database", name: "PostgreSQL", icon: "PG", color: "#35668d" },
  { pattern: "MySQL.Database", name: "MySQL", icon: "MY", color: "#c7762f" },
  { pattern: "Snowflake.Databases", name: "Snowflake", icon: "SN", color: "#4197b5" },
  { pattern: "Databricks.Catalogs", name: "Databricks", icon: "DB", color: "#d64d39" },
  { pattern: "PowerPlatform.Dataflows", name: "Power Platform Dataflows", icon: "DF", color: "#4f7bd9" },
  { pattern: "AzureStorage.Blobs", name: "Azure Blob Storage", icon: "AZ", color: "#2176ae" },
  { pattern: "AzureStorage.DataLake", name: "Azure Data Lake", icon: "ADL", color: "#2176ae" },
  { pattern: "GoogleAnalytics.Accounts", name: "Google Analytics", icon: "GA", color: "#d39200" },
  { pattern: "Salesforce.Data", name: "Salesforce", icon: "SF", color: "#2b8f9f" },
  { pattern: "SapBusinessWarehouse.Cubes", name: "SAP BW", icon: "SAP", color: "#5266b8" },
  { pattern: "Sql.Databases", name: "SQL Server", icon: "SQL", color: "#2176ae" }
];

// TYPE_LABELS is now dynamic — always call typeLabels() instead of TYPE_LABELS directly
const TYPE_LABELS_KEYS = ["source", "query", "model", "measure", "calc_column", "visual"];
function typeLabels() {
  const T = t();
  return {
    source:      T.typeSource,
    query:       T.typeQuery,
    model:       T.typeModel,
    measure:     T.typeMeasure,
    calc_column: T.typeCalcColumn,
    visual:      T.typeVisual,
  };
}

const state = {
  graph: { nodes: [], edges: [] },
  relationships: [],          // dados estruturados vindos do backend
  architecture: [],           // [{source, iconUrl, icon, color, queries:[{name,expression,connectionPath}]}]
  lastPbix: null,
  lastPbixFile: null,
  selectedId: null,
  activeTab: "mapa",          // "mapa" | "relacionamentos" | "arquitetura" | "paginas"
  pages: [],                  // [{name, ordinal, visualCount, width, height}]
  lineageFilter: false,       // quando true: exibe só a linhagem do nó selecionado
  enabledTypes: new Set(TYPE_LABELS_KEYS),
  scale: 1
};

const els = {
  input: document.getElementById("pbixInput"),
  demoButton: document.getElementById("demoButton"),
  pbixButton: document.getElementById("pbixButton"),
  exportButton: document.getElementById("exportButton"),
  graphCanvas: document.getElementById("graphCanvas"),
  edgeLayer: document.getElementById("edgeLayer"),
  emptyState: document.getElementById("emptyState"),
  details: document.getElementById("nodeDetails"),
  typeFilters: document.getElementById("typeFilters"),
  sourceCount: document.getElementById("sourceCount"),
  queryCount: document.getElementById("queryCount"),
  nodeCount: document.getElementById("nodeCount"),
  impactCount: document.getElementById("impactCount"),
  title: document.getElementById("workspaceTitle"),
  subtitle: document.getElementById("workspaceSubtitle"),
  tabMapa: document.getElementById("tabMapa"),
  tabRelacionamentos: document.getElementById("tabRelacionamentos"),
  panelMapa: document.getElementById("panelMapa"),
  panelRelacionamentos: document.getElementById("panelRelacionamentos"),
  mapLegend: document.getElementById("mapLegend"),
  relEmpty: document.getElementById("relEmpty"),
  relContent: document.getElementById("relContent"),
  relDiagram: document.getElementById("relDiagram"),
  relTable: document.getElementById("relTable"),
  lineageToggle: document.getElementById("lineageToggle"),
  exportImageButton: document.getElementById("exportImageButton"),
  exportDocxButton: document.getElementById("exportDocxButton"),
  tabArquitetura: document.getElementById("tabArquitetura"),
  panelArquitetura: document.getElementById("panelArquitetura"),
  archEmpty: document.getElementById("archEmpty"),
  archContent: document.getElementById("archContent"),
  archDiagram: document.getElementById("archDiagram"),
  tabPaginas: document.getElementById("tabPaginas"),
  panelPaginas: document.getElementById("panelPaginas"),
  pagesEmpty: document.getElementById("pagesEmpty"),
  pagesContent: document.getElementById("pagesContent"),
};

init();

function init() {
  renderFilters();
  bindEvents();
  applyI18n();
  loadDemo();
}

function bindEvents() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLocale(btn.dataset.lang));
  });

  els.input.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    await loadPbix(file);
  });

  els.demoButton.addEventListener("click", loadDemo);
  els.pbixButton.addEventListener("click", loadLastPbix);
  els.exportButton.addEventListener("click", exportGraph);
  els.exportDocxButton.addEventListener("click", exportDocumentation);
  window.addEventListener("resize", () => renderGraph());

  els.tabMapa.addEventListener("click", () => switchTab("mapa"));
  els.tabRelacionamentos.addEventListener("click", () => switchTab("relacionamentos"));
  els.tabArquitetura.addEventListener("click", () => switchTab("arquitetura"));
  els.tabPaginas.addEventListener("click", () => switchTab("paginas"));

  els.lineageToggle.addEventListener("change", () => {
    state.lineageFilter = els.lineageToggle.checked;
    if (!state.lineageFilter) state.selectedId = null;
    renderGraph();
  });

  els.exportImageButton.addEventListener("click", exportImage);
}

function switchTab(tab) {
  state.activeTab = tab;
  const isMapa            = tab === "mapa";
  const isRelacionamentos = tab === "relacionamentos";
  const isArquitetura     = tab === "arquitetura";
  const isPaginas         = tab === "paginas";

  els.tabMapa.classList.toggle("active", isMapa);
  els.tabRelacionamentos.classList.toggle("active", isRelacionamentos);
  els.tabArquitetura.classList.toggle("active", isArquitetura);
  els.tabPaginas.classList.toggle("active", isPaginas);
  els.tabMapa.setAttribute("aria-selected", isMapa ? "true" : "false");
  els.tabRelacionamentos.setAttribute("aria-selected", isRelacionamentos ? "true" : "false");
  els.tabArquitetura.setAttribute("aria-selected", isArquitetura ? "true" : "false");
  els.tabPaginas.setAttribute("aria-selected", isPaginas ? "true" : "false");

  els.panelMapa.classList.toggle("hidden", !isMapa);
  els.panelRelacionamentos.classList.toggle("hidden", !isRelacionamentos);
  els.panelArquitetura.classList.toggle("hidden", !isArquitetura);
  els.panelPaginas.classList.toggle("hidden", !isPaginas);
  els.mapLegend.style.visibility = isMapa ? "visible" : "hidden";

  if (isRelacionamentos) renderRelationships();
  if (isArquitetura) renderArchitecture();
  if (isPaginas) renderPages();
}

function renderFilters() {
  els.typeFilters.innerHTML = "";
  Object.entries(typeLabels()).forEach(([type, label]) => {
    const item = document.createElement("label");
    item.innerHTML = `<input type="checkbox" ${state.enabledTypes.has(type) ? "checked" : ""} data-type="${type}" /> ${label}`;
    item.querySelector("input").addEventListener("change", (event) => {
      if (event.target.checked) state.enabledTypes.add(type);
      else state.enabledTypes.delete(type);
      renderGraph();
    });
    els.typeFilters.appendChild(item);
  });
}

async function loadPbix(file) {
  setSubtitle(t().loadingAnalysing(file.name));
  state.lastPbixFile = file;
  els.exportDocxButton.disabled = false;
  const backendGraph = await analyzeWithBackend(file);
  if (backendGraph) {
    state.relationships = backendGraph.relationships || [];
    state.pages        = backendGraph.pages        || [];
    console.log("[BIFlowMapper] relationships recebidos:", state.relationships.length, state.relationships);
    console.log("[BIFlowMapper] warnings:", backendGraph.warnings);
    const source = backendGraph.source === "pbixray" ? "PBIXRay" : "backend";
    state.architecture = buildArchitectureData(backendGraph);
    rememberPbix(backendGraph, file.name, "");
    setGraph(backendGraph, file.name, "");
    return;
  }

  state.relationships = [];
  state.architecture  = [];
  state.pages         = [];
  try {
    const arrayBuffer = await file.arrayBuffer();
    const entries = await readZipEntries(arrayBuffer);
    const artifacts = await extractArtifacts(entries);
    const graph = buildGraphFromArtifacts(artifacts, file.name);
    const nestedCount = artifacts.entryNames.length - entries.length;
    const nestedCopy = nestedCount > 0 ? t().loadingNestedExtra(nestedCount) : "";
    const subtitle = t().loadingEntries(entries.length, nestedCopy);
    state.architecture = buildArchitectureData(graph);
    rememberPbix(graph, file.name, subtitle);
    setGraph(graph, file.name, subtitle);
  } catch (error) {
    console.error(error);
    setSubtitle(t().loadingError);
  }
}

function rememberPbix(graph, title, subtitle) {
  state.lastPbix = {
    graph: cloneGraph(graph),
    title,
    subtitle
  };
  els.pbixButton.disabled = false;
}

function loadLastPbix() {
  if (!state.lastPbix) return;
  setGraph(cloneGraph(state.lastPbix.graph), state.lastPbix.title, state.lastPbix.subtitle);
}

function cloneGraph(graph) {
  return JSON.parse(JSON.stringify(graph));
}

async function analyzeWithBackend(file) {
  if (window.location.protocol === "file:") return null;

  const form = new FormData();
  form.append("pbix", file, file.name);

  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      body: form
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || `HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn("Backend PBIXRay indisponivel; usando fallback do navegador.", error);
    return null;
  }
}

function loadDemo() {
  const demo = {
    sources: [
      connectorNode("SQL Server", { iconUrl: "assets/connectors/sql-database-64.png", icon: "SQL" }),
      connectorNode("Excel", { iconUrl: "assets/connectors/excel-workbook-64.png", icon: "XLS" }),
      connectorNode("Web", { iconUrl: "assets/connectors/web-64.png", icon: "WEB" })
    ],
    queries: [
      queryNode("Sales Query", t().demoQuery1Expr),
      queryNode("Targets Query", t().demoQuery2Expr),
      queryNode("FX Rates Query", t().demoQuery3Expr)
    ],
    tables: ["Sales", "Targets", "Exchange Rates", "Date"].map(modelNode),
    measures: ["Revenue", "Gross Margin", "Target Gap"].map(measureNode),
    calcColumns: ["YTD Category", "Margin Band"].map(calcColumnNode),
    visuals: ["Sales by Region", "Margin Trend", "Target Gap Card"].map(visualNode)
  };

  const nodes = [
    ...demo.sources,
    ...demo.queries,
    ...demo.tables,
    ...demo.measures,
    ...demo.calcColumns,
    ...demo.visuals
  ];

  const edges = [
    edge("source:sql-server", "query:sales-query"),
    edge("source:excel", "query:targets-query"),
    edge("source:web", "query:fx-rates-query"),
    edge("query:sales-query", "model:sales"),
    edge("query:targets-query", "model:targets"),
    edge("query:fx-rates-query", "model:exchange-rates"),
    edge("model:sales", "measure:revenue"),
    edge("model:sales", "measure:gross-margin"),
    edge("model:targets", "measure:target-gap"),
    edge("model:sales", "calc_column:ytd-category"),
    edge("model:sales", "calc_column:margin-band"),
    edge("measure:revenue", "visual:sales-by-region"),
    edge("measure:gross-margin", "visual:margin-trend"),
    edge("measure:target-gap", "visual:target-gap-card")
  ];

  setGraph({ nodes, edges, warnings: [] }, t().demoTitle, t().demoSubtitle);

  // Relationships for demo panel
  state.relationships = [
    { fromTable: "Sales",          fromColumn: "DateKey",      toTable: "Date",          toColumn: "DateKey",      cardinality: "M:1", crossFilter: "Single", active: true  },
    { fromTable: "Sales",          fromColumn: "ProductKey",   toTable: "Products",      toColumn: "ProductKey",   cardinality: "M:1", crossFilter: "Single", active: true  },
    { fromTable: "Targets",        fromColumn: "DateKey",      toTable: "Date",          toColumn: "DateKey",      cardinality: "M:1", crossFilter: "Single", active: true  },
    { fromTable: "Exchange Rates", fromColumn: "CurrencyCode", toTable: "Targets",       toColumn: "CurrencyCode", cardinality: "M:1", crossFilter: "Both",   active: true  },
    { fromTable: "Sales",          fromColumn: "RegionKey",    toTable: "Exchange Rates", toColumn: "RegionKey",   cardinality: "M:M", crossFilter: "Single", active: false },
  ];

  // Architecture demo data
  state.architecture = [
    {
      sourceId: "source:sql-server",
      sourceName: "SQL Server",
      iconUrl: "assets/connectors/sql-database-64.png",
      icon: "SQL",
      color: "#2176ae",
      queries: [
        { name: "Sales Query",   connectionPath: "Sql.Database(\"contoso.database.windows.net\", \"SalesDB\")",    expression: t().demoQuery1Expr },
      ]
    },
    {
      sourceId: "source:excel",
      sourceName: "Excel",
      iconUrl: "assets/connectors/excel-workbook-64.png",
      icon: "XLS",
      color: "#28805a",
      queries: [
        { name: "Targets Query", connectionPath: "https://company.sharepoint.com/sites/finance/Targets.xlsx", expression: t().demoQuery2Expr },
      ]
    },
    {
      sourceId: "source:web",
      sourceName: "Web",
      iconUrl: "assets/connectors/web-64.png",
      icon: "WEB",
      color: "#6f52b8",
      queries: [
        { name: "FX Rates Query", connectionPath: "https://api.exchangerate.host/latest?base=USD", expression: t().demoQuery3Expr },
      ]
    },
  ];

  // Demo pages
  state.pages = [
    { name: "Sales Overview",    ordinal: 0, visualCount: 5, width: 1280, height: 720 },
    { name: "Margin Analysis",   ordinal: 1, visualCount: 4, width: 1280, height: 720 },
    { name: "Target Tracker",    ordinal: 2, visualCount: 3, width: 1280, height: 720 },
    { name: "FX Impact",         ordinal: 3, visualCount: 2, width: 1280, height: 720 },
  ];
}

async function readZipEntries(input) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const eocdOffset = findEndOfCentralDirectory(bytes);
  if (eocdOffset < 0) throw new Error("Arquivo ZIP/PBIX invalido.");

  const totalEntries = view.getUint16(eocdOffset + 10, true);
  const centralOffset = view.getUint32(eocdOffset + 16, true);
  const entries = [];
  let offset = centralOffset;

  for (let index = 0; index < totalEntries; index += 1) {
    const signature = view.getUint32(offset, true);
    if (signature !== 0x02014b50) break;

    const compression = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const uncompressedSize = view.getUint32(offset + 24, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localOffset = view.getUint32(offset + 42, true);
    const nameBytes = bytes.slice(offset + 46, offset + 46 + nameLength);
    const name = decodeUtf8(nameBytes);

    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataOffset = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.slice(dataOffset, dataOffset + compressedSize);

    entries.push({
      name,
      compression,
      compressed,
      compressedSize,
      uncompressedSize
    });

    offset += 46 + nameLength + extraLength + commentLength;
  }

  return entries;
}

function findEndOfCentralDirectory(bytes) {
  for (let offset = bytes.length - 22; offset >= 0; offset -= 1) {
    if (
      bytes[offset] === 0x50 &&
      bytes[offset + 1] === 0x4b &&
      bytes[offset + 2] === 0x05 &&
      bytes[offset + 3] === 0x06
    ) {
      return offset;
    }
  }
  return -1;
}

async function inflateEntry(entry) {
  if (entry.compression === 0) return entry.compressed;
  if (entry.compression !== 8) return new Uint8Array();
  if (!("DecompressionStream" in window)) {
    throw new Error("Este navegador nao oferece DecompressionStream para ZIP deflate.");
  }

  const stream = new Blob([entry.compressed]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function extractArtifacts(entries) {
  const artifacts = {
    entryNames: entries.map((entry) => entry.name),
    texts: [],
    mashupText: "",
    layoutText: "",
    modelText: "",
    diagnostics: []
  };

  const interesting = entries.filter((entry) => {
    const name = entry.name.toLowerCase();
    return (
      name.includes("datamashup") ||
      name.includes("layout") ||
      name.includes("model") ||
      name.includes("connections") ||
      name.endsWith(".json") ||
      name.endsWith(".xml")
    );
  });

  for (const entry of interesting) {
    const data = await inflateEntry(entry);
    addArtifactText(artifacts, entry.name, data);

    if (entry.name.toLowerCase().includes("datamashup")) {
      const nestedEntries = await extractNestedMashupEntries(data, entry.name);
      for (const nested of nestedEntries) {
        artifacts.entryNames.push(nested.name);
        addArtifactText(artifacts, nested.name, nested.data);
      }
    }
  }

  artifacts.diagnostics.push(`Entries analysed: ${artifacts.entryNames.join(", ")}`);
  if (!artifacts.mashupText.trim()) {
    artifacts.diagnostics.push("DataMashup did not generate accessible M text in this read.");
  }

  return artifacts;
}

function addArtifactText(artifacts, name, data) {
  const text = bestEffortText(data);
  artifacts.texts.push({ name, text });

  const lower = name.toLowerCase();
  if (lower.includes("datamashup") || lower.includes("formulas/") || lower.endsWith(".m")) {
    artifacts.mashupText += `\n${text}`;
  }
  if (lower.includes("layout") || lower.includes("report/")) artifacts.layoutText += `\n${text}`;
  if (lower.includes("model") || lower.includes("datamodelschema")) artifacts.modelText += `\n${text}`;
}

async function extractNestedMashupEntries(data, parentName) {
  const packages = findEmbeddedZipPackages(data);
  const nested = [];

  for (const [packageIndex, bytes] of packages.entries()) {
    try {
      const entries = await readZipEntries(bytes);
      for (const entry of entries) {
        const inflated = await inflateEntry(entry);
        nested.push({
          name: `${parentName}::package${packageIndex + 1}/${entry.name}`,
          data: inflated
        });
      }
    } catch (error) {
      console.warn("Falha ao abrir pacote interno do DataMashup", error);
    }
  }

  return nested;
}

function findEmbeddedZipPackages(data) {
  const packages = [];
  const offsets = new Set();

  if (data.byteLength > 8) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const declaredLength = view.getUint32(0, true);
    if (declaredLength > 22 && declaredLength <= data.byteLength - 4) {
      const declaredPackage = data.slice(4, 4 + declaredLength);
      if (looksLikeZip(declaredPackage)) {
        packages.push(declaredPackage);
        offsets.add(4);
      }
    }
  }

  for (let offset = 0; offset < data.byteLength - 4 && packages.length < 8; offset += 1) {
    if (
      data[offset] === 0x50 &&
      data[offset + 1] === 0x4b &&
      data[offset + 2] === 0x03 &&
      data[offset + 3] === 0x04 &&
      !offsets.has(offset)
    ) {
      const candidate = data.slice(offset);
      if (findEndOfCentralDirectory(candidate) >= 0) {
        packages.push(candidate);
        offsets.add(offset);
      }
    }
  }

  return packages;
}

function looksLikeZip(bytes) {
  return (
    bytes.byteLength > 4 &&
    bytes[0] === 0x50 &&
    bytes[1] === 0x4b &&
    bytes[2] === 0x03 &&
    bytes[3] === 0x04
  );
}

function bestEffortText(bytes) {
  const utf8 = decodeUtf8(bytes);
  const utf16 = decodeUtf16Le(bytes);
  const asciiStrings = extractAsciiStrings(bytes).join("\n");
  return [utf8, utf16, asciiStrings].join("\n");
}

function decodeUtf8(bytes) {
  try {
    return new TextDecoder("utf-8", { fatal: false }).decode(bytes);
  } catch {
    return "";
  }
}

function decodeUtf16Le(bytes) {
  try {
    return new TextDecoder("utf-16le", { fatal: false }).decode(bytes);
  } catch {
    return "";
  }
}

function extractAsciiStrings(bytes) {
  const strings = [];
  let current = "";
  for (const byte of bytes) {
    if (byte >= 32 && byte <= 126) {
      current += String.fromCharCode(byte);
    } else if (current.length >= 4) {
      strings.push(current);
      current = "";
    } else {
      current = "";
    }
  }
  if (current.length >= 4) strings.push(current);
  return strings;
}

function buildGraphFromArtifacts(artifacts, fileName) {
  const allText = artifacts.texts.map((item) => item.text).join("\n");
  const detectedConnectors = detectConnectors(allText);
  const queries = detectQueries(artifacts.mashupText || allText, detectedConnectors);
  const tables = detectTables(artifacts.modelText || allText, queries);
  const measures = detectMeasures(artifacts.modelText || allText);
  const calcColumns = detectCalcColumns(artifacts.modelText || allText);
  const visuals = detectVisuals(artifacts.layoutText || allText);

  const nodes = [];
  const edges = [];

  const sourceNodes = detectedConnectors.map((connector) => connectorNode(connector.name, connector));
  nodes.push(...sourceNodes);

  const queryNodes = queries.map((query) => queryNode(query.name, query.expression));
  nodes.push(...queryNodes);

  const tableNodes = tables.map(modelNode);
  nodes.push(...tableNodes);

  const measureNodes = measures.map(measureNode);
  nodes.push(...measureNodes);

  const calcColumnNodes = calcColumns.map(calcColumnNode);
  nodes.push(...calcColumnNodes);

  const visualNodes = visuals.map(visualNode);
  nodes.push(...visualNodes);

  if (sourceNodes.length && queryNodes.length) {
    queryNodes.forEach((query) => {
      const matchingSources = sourceNodes.filter((source) => query.meta.expression.includes(source.meta.pattern));
      const sources = matchingSources.length ? matchingSources : sourceNodes;
      sources.forEach((source) => edges.push(edge(source.id, query.id, "uses connector")));
    });
  }

  if (queryNodes.length && tableNodes.length) {
    tableNodes.forEach((table, index) => {
      const query = queryNodes.find((item) => normalize(item.label) === normalize(table.label)) || queryNodes[index % queryNodes.length];
      edges.push(edge(query.id, table.id, "loads table"));
    });
  }

  if (tableNodes.length && measureNodes.length) {
    measureNodes.forEach((measure, index) => {
      edges.push(edge(tableNodes[index % tableNodes.length].id, measure.id, "feeds measure"));
    });
  }

  if (tableNodes.length && calcColumnNodes.length) {
    calcColumnNodes.forEach((cc, index) => {
      edges.push(edge(tableNodes[index % tableNodes.length].id, cc.id, "defines calc column"));
    });
  }

  if (measureNodes.length && visualNodes.length) {
    visualNodes.forEach((visual, index) => {
      edges.push(edge(measureNodes[index % measureNodes.length].id, visual.id, "renders visual"));
    });
  } else if (tableNodes.length && visualNodes.length) {
    visualNodes.forEach((visual, index) => {
      edges.push(edge(tableNodes[index % tableNodes.length].id, visual.id, "renders visual"));
    });
  }

  if (!nodes.length) {
    nodes.push({
      id: "file:pbix",
      type: "source",
      label: fileName,
      icon: "PBX",
      meta: {
        note: t().loadingNoBackend,
        expression: artifacts.diagnostics.join("\n")
      }
    });
  }

  return {
    nodes: uniqueById(nodes),
    edges: uniqueEdges(edges),
    warnings: artifacts.diagnostics
  };
}

function detectConnectors(text) {
  return uniqueByName(CONNECTORS.filter((connector) => hasConnectorCall(text, connector.pattern)));
}

function hasConnectorCall(text, pattern) {
  if (!text || !pattern) return false;
  const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^A-Za-z0-9_])${escaped}\\s*\\(`, "i").test(text);
}

function detectQueries(text, connectors) {
  const names = new Set();
  const queryRegex = /(?:shared\s+)?#?"?([^"=\r\n;]{2,100})"?\s*=\s*let/gi;
  let match;
  while ((match = queryRegex.exec(text))) {
    names.add(match[1].trim());
  }

  if (!names.size && connectors.length) {
    connectors.forEach((connector) => names.add(`${connector.name} Query`));
  }

  return Array.from(names).slice(0, 18).map((name) => ({
    name,
    expression: snippetAround(text, name, 900) || text.slice(0, 900)
  }));
}

function detectTables(text, queries) {
  const names = new Set();
  const tableRegexes = [
    /"name"\s*:\s*"([^"]{2,80})"\s*,\s*"columns"/g,
    /"tables"\s*:\s*\[[\s\S]*?"name"\s*:\s*"([^"]{2,80})"/g
  ];

  tableRegexes.forEach((regex) => {
    let match;
    while ((match = regex.exec(text))) names.add(match[1]);
  });

  if (!names.size) queries.forEach((query) => names.add(query.name.replace(/\s+Query$/i, "")));
  return Array.from(names).filter(Boolean).slice(0, 20);
}

function detectMeasures(text) {
  const names = new Set();
  const measureRegex = /"name"\s*:\s*"([^"]{2,80})"\s*,\s*"expression"\s*:/g;
  let match;
  while ((match = measureRegex.exec(text))) names.add(match[1]);
  return Array.from(names).slice(0, 16);
}

function detectCalcColumns(text) {
  // Calculated columns appear inside "columns" arrays in the model JSON with an "expression" field.
  const names = new Set();
  const calcColRegex = /"columns"\s*:\s*\[[\s\S]*?"name"\s*:\s*"([^"]{2,80})"\s*,[\s\S]*?"expression"\s*:\s*"[^"]{2,}/g;
  let match;
  while ((match = calcColRegex.exec(text))) names.add(match[1]);
  return Array.from(names).slice(0, 16);
}

function detectVisuals(text) {
  const names = new Set();
  const visualRegex = /"visualType"\s*:\s*"([^"]{2,80})"/g;
  let match;
  while ((match = visualRegex.exec(text))) names.add(toTitle(match[1]));
  return Array.from(names).slice(0, 16);
}

function connectorNode(name, connector = CONNECTORS.find((item) => item.name === name) || {}) {
  return {
    id: `source:${slug(name)}`,
    type: "source",
    label: name,
    icon: connector.icon || initials(name),
    iconUrl: connector.iconUrl || "",
    meta: { pattern: connector.pattern || name, color: connector.color || "#2176ae" }
  };
}

function queryNode(name, expression = "") {
  return {
    id: `query:${slug(name)}`,
    type: "query",
    label: name,
    icon: "M",
    meta: { expression }
  };
}

function modelNode(name) {
  return {
    id: `model:${slug(name)}`,
    type: "model",
    label: name,
    icon: "TBL",
    meta: {}
  };
}

function measureNode(name) {
  return {
    id: `measure:${slug(name)}`,
    type: "measure",
    label: name,
    icon: "DAX",
    meta: {}
  };
}

function calcColumnNode(name) {
  return {
    id: `calc_column:${slug(name)}`,
    type: "calc_column",
    label: name,
    icon: "CC",
    meta: {}
  };
}

function visualNode(name) {
  return {
    id: `visual:${slug(name)}`,
    type: "visual",
    label: name,
    icon: "VIS",
    meta: {}
  };
}

function edge(from, to, label = "") {
  return { id: `${from}->${to}`, from, to, label };
}

// ─── Painel de Relacionamentos ────────────────────────────────────────────────

function translateCrossFilter(val) {
  const T = t();
  const v = (val || "").toLowerCase();
  if (v.includes("bidi") || v.includes("both")) return T.demoCross2;
  return T.demoCross1;
}

function renderPages() {
  const T     = t();
  const pages = state.pages || [];

  if (!pages.length) {
    els.pagesEmpty.classList.remove("hidden");
    els.pagesContent.classList.add("hidden");
    return;
  }

  els.pagesEmpty.classList.add("hidden");
  els.pagesContent.classList.remove("hidden");

  const ICON_MAP = {
    1: "📊", 2: "📈", 3: "🎯", 4: "💱", 5: "📋", 6: "🔍", 7: "📉", 8: "🗂️",
  };

  els.pagesContent.innerHTML = pages.map((page, i) => {
    const icon        = ICON_MAP[(i % Object.keys(ICON_MAP).length) + 1] || "📄";
    const visLabel    = T.pagesVisualsLabel(page.visualCount);
    const canvasLabel = T.pagesCanvasLabel(page.width, page.height);
    return `
      <div class="page-card">
        <div class="page-card-ordinal">${page.ordinal + 1}</div>
        <div class="page-card-icon" aria-hidden="true">${icon}</div>
        <div class="page-card-body">
          <div class="page-card-name">${escapeHtml(page.name)}</div>
          <div class="page-card-meta">
            <span class="page-badge">${escapeHtml(visLabel)}</span>
            <span class="page-badge page-badge--canvas">${escapeHtml(canvasLabel)}</span>
          </div>
        </div>
      </div>`;
  }).join("");
}

function renderRelationships() {
  const rels = state.relationships;

  if (!rels || rels.length === 0) {
    els.relEmpty.classList.remove("hidden");
    els.relContent.classList.add("hidden");
    return;
  }

  els.relEmpty.classList.add("hidden");
  els.relContent.classList.remove("hidden");

  renderRelDiagram(rels);
  renderRelTable(rels);
}

function renderRelTable(rels) {
  const rows = rels.map((rel) => {
    const activeIcon = rel.active ? "✓" : "○";
    const activeCls  = rel.active ? "style=\"color:#28805a\"" : "style=\"color:#aaa\"";
    return `
      <tr>
        <td>${escapeHtml(rel.fromTable)}</td>
        <td style="color:var(--muted);font-size:12px">${escapeHtml(rel.fromColumn)}</td>
        <td>${escapeHtml(rel.toTable)}</td>
        <td style="color:var(--muted);font-size:12px">${escapeHtml(rel.toColumn)}</td>
        <td><span class="cardinality-badge">${escapeHtml(rel.cardinality)}</span></td>
        <td><span class="cross-filter-badge">${escapeHtml(translateCrossFilter(rel.crossFilter))}</span></td>
        <td ${activeCls}>${activeIcon}</td>
      </tr>`;
  }).join("");

  els.relTable.innerHTML = `
    <table class="rel-table" aria-label="${t().relTableAriaLabel}">
      <thead>
        <tr>
          <th>${t().relFromTable}</th>
          <th>${t().relFromCol}</th>
          <th>${t().relToTable}</th>
          <th>${t().relToCol}</th>
          <th>${t().relCardinality}</th>
          <th>${t().relCrossFilter}</th>
          <th>${t().relActive}</th>
        </tr>
      </thead>
      <tbody>
        ${rows || `<tr class="rel-empty-row"><td colspan="7">${t().relNoData}</td></tr>`}
      </tbody>
    </table>`;
}

function renderRelDiagram(rels) {
  const tableNames = [...new Set(rels.flatMap((r) => [r.fromTable, r.toTable]))].sort();
  const count = tableNames.length;
  if (count === 0) { els.relDiagram.innerHTML = ""; return; }

  // ── Layout: force-directed seed — tables in a smart grid ──────────────────
  const NODE_W  = 180;
  const NODE_H  = 52;
  const COLS    = Math.min(count, Math.ceil(Math.sqrt(count * 1.8)));
  const ROWS    = Math.ceil(count / COLS);
  const CELL_W  = 260;
  const CELL_H  = 130;
  const PAD_X   = 48;
  const PAD_Y   = 48;
  const SVG_W   = Math.max(760, COLS * CELL_W + PAD_X * 2);
  const SVG_H   = Math.max(320, ROWS * CELL_H + PAD_Y * 2) + 60;

  const pos = {};
  tableNames.forEach((name, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    pos[name] = {
      x: PAD_X + col * CELL_W + (CELL_W - NODE_W) / 2,
      y: PAD_Y + row * CELL_H + (CELL_H - NODE_H) / 2,
      cx: PAD_X + col * CELL_W + CELL_W / 2,
      cy: PAD_Y + row * CELL_H + CELL_H / 2,
    };
  });

  // ── Crow's foot end markers ──────────────────────────────────────────────
  // One side (from) → many side (to) for M:1 / 1:M / 1:1 / M:M
  function crowsFoot(id, type, color) {
    // type: "one" | "many" | "one-mandatory" | "many-mandatory"
    if (type === "many") {
      return `<marker id="${id}" viewBox="-2 -6 14 12" refX="12" refY="0"
        markerWidth="14" markerHeight="12" orient="auto">
        <line x1="0" y1="-5" x2="10" y2="0" stroke="${color}" stroke-width="1.8"/>
        <line x1="0" y1="5"  x2="10" y2="0" stroke="${color}" stroke-width="1.8"/>
        <line x1="0" y1="0"  x2="10" y2="0" stroke="${color}" stroke-width="1.8"/>
      </marker>`;
    }
    // "one" — single vertical bar
    return `<marker id="${id}" viewBox="-2 -6 12 12" refX="10" refY="0"
      markerWidth="12" markerHeight="12" orient="auto">
      <line x1="8" y1="-5" x2="8" y2="5"  stroke="${color}" stroke-width="1.8"/>
      <line x1="4" y1="-5" x2="4" y2="5"  stroke="${color}" stroke-width="1.8"/>
    </marker>`;
  }

  // Parse cardinality string (e.g. "M:1", "1:M", "1:1", "M:M") → {from, to}
  function parseCard(card) {
    const parts = String(card).split(":");
    const fromSide = parts[0] === "1" ? "one" : "many";
    const toSide   = (parts[1] || "") === "1" ? "one" : "many";
    return { fromSide, toSide };
  }

  // ── Build edge paths ─────────────────────────────────────────────────────
  const defs = [];
  const edges = [];
  const labels = [];

  rels.forEach((rel, i) => {
    const fp = pos[rel.fromTable];
    const tp = pos[rel.toTable];
    if (!fp || !tp) return;

    const active  = rel.active !== false;
    const color   = active ? "#0078D4" : "#A19F9D";
    const dash    = active ? "" : `stroke-dasharray="6,4"`;
    const { fromSide, toSide } = parseCard(rel.cardinality);

    const midFromId = `mf${i}`;
    const midToId   = `mt${i}`;
    defs.push(crowsFoot(midFromId, fromSide, color));
    defs.push(crowsFoot(midToId,   toSide,   color));
    const translatedCF = translateCrossFilter(rel.crossFilter);

    // Connection points: pick nearest edge of each node
    const fcx = fp.cx; const fcy = fp.cy;
    const tcx = tp.cx; const tcy = tp.cy;
    const dx  = tcx - fcx;
    const dy  = tcy - fcy;

    // Exit/enter from left or right depending on relative position
    let x1, y1, x2, y2, cp1x, cp1y, cp2x, cp2y;
    const sameRow = Math.abs(dy) < CELL_H * 0.5;

    if (sameRow) {
      // Horizontal connection
      if (dx > 0) {
        x1 = fp.x + NODE_W; y1 = fp.y + NODE_H / 2;
        x2 = tp.x;           y2 = tp.y + NODE_H / 2;
      } else {
        x1 = fp.x;           y1 = fp.y + NODE_H / 2;
        x2 = tp.x + NODE_W;  y2 = tp.y + NODE_H / 2;
      }
      const gap = Math.abs(x2 - x1) * 0.45;
      cp1x = x1 + (dx > 0 ? gap : -gap); cp1y = y1;
      cp2x = x2 - (dx > 0 ? gap : -gap); cp2y = y2;
    } else {
      // Vertical / diagonal: exit bottom or top
      if (dy > 0) {
        x1 = fp.x + NODE_W / 2; y1 = fp.y + NODE_H;
        x2 = tp.x + NODE_W / 2; y2 = tp.y;
      } else {
        x1 = fp.x + NODE_W / 2; y1 = fp.y;
        x2 = tp.x + NODE_W / 2; y2 = tp.y + NODE_H;
      }
      const gap = Math.abs(y2 - y1) * 0.45;
      cp1x = x1; cp1y = y1 + (dy > 0 ? gap : -gap);
      cp2x = x2; cp2y = y2 - (dy > 0 ? gap : -gap);
    }

    edges.push(`
      <path d="M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}"
        fill="none" stroke="${color}" stroke-width="${active ? 2 : 1.5}" ${dash}
        marker-start="url(#${midFromId})"
        marker-end="url(#${midToId})"/>`);

    // Cardinality pill label at midpoint
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const cardText = String(rel.cardinality);
    const labelW = cardText.length * 7.5 + 14;
    const labelH = 20;

    // Cross-filter icon (↔ or →)
    const cfIcon = (rel.crossFilter || "").toLowerCase().includes("bidi") ||
                   (rel.crossFilter || "").toLowerCase().includes("both") ? "⇄" : "→";

    labels.push(`
      <g transform="translate(${mx - labelW / 2}, ${my - labelH / 2 - 2})">
        <rect width="${labelW}" height="${labelH}" rx="4"
              fill="${active ? "#EFF6FF" : "#F3F2F1"}"
              stroke="${color}" stroke-width="1" opacity="0.97"/>
        <text x="${labelW / 2}" y="${labelH / 2 + 4.5}" text-anchor="middle"
              font-family="'Cascadia Code','Consolas',monospace"
              font-size="10.5" font-weight="700" fill="${color}">${escapeHtml(cardText)}</text>
      </g>
      <text x="${mx}" y="${my + labelH / 2 + 11}" text-anchor="middle"
            font-family="Segoe UI,Arial,sans-serif" font-size="9.5"
            fill="${active ? "#0078D4" : "#A19F9D"}" opacity="0.75">${cfIcon} ${escapeHtml(translatedCF)}</text>`);
  });

  // ── Table node cards ─────────────────────────────────────────────────────
  // Collect columns referenced per table
  const colsByTable = {};
  rels.forEach((rel) => {
    [rel.fromTable, rel.toTable].forEach((t) => { if (!colsByTable[t]) colsByTable[t] = new Set(); });
    if (rel.fromColumn) colsByTable[rel.fromTable].add(rel.fromColumn);
    if (rel.toColumn)   colsByTable[rel.toTable].add(rel.toColumn);
  });

  const tableCards = tableNames.map((name) => {
    const { x, y } = pos[name];
    const cols = [...(colsByTable[name] || [])].slice(0, 4);
    const cardH = NODE_H + cols.length * 18;
    const shortName = name.length > 22 ? name.slice(0, 20) + "…" : name;

    // Column rows
    const colRows = cols.map((col, ci) => {
      const cy = NODE_H + 4 + ci * 18;
      const isKey = col.toLowerCase().includes("id") || col.toLowerCase().includes("key");
      return `
        <line x1="0" y1="${cy - 1}" x2="${NODE_W}" y2="${cy - 1}" stroke="#E1DFDD" stroke-width="1"/>
        <text x="10" y="${cy + 11}" font-family="Segoe UI,Arial,sans-serif"
              font-size="10" fill="${isKey ? "#0078D4" : "#605E5C"}">
          ${isKey ? "🔑 " : ""}${escapeHtml(col.length > 26 ? col.slice(0, 24) + "…" : col)}
        </text>`;
    }).join("");

    return `
      <g transform="translate(${x}, ${y})">
        <!-- Drop shadow -->
        <rect x="3" y="3" width="${NODE_W}" height="${cardH}" rx="8"
              fill="rgba(0,0,0,0.08)"/>
        <!-- Card background -->
        <rect width="${NODE_W}" height="${cardH}" rx="8"
              fill="white" stroke="#C8C6C4" stroke-width="1"/>
        <!-- Header bar -->
        <rect width="${NODE_W}" height="${NODE_H}" rx="8" fill="#107C10"/>
        <rect y="${NODE_H - 8}" width="${NODE_W}" height="8" fill="#107C10"/>
        <!-- Table icon -->
        <rect x="10" y="10" width="26" height="26" rx="5" fill="rgba(255,255,255,0.18)"/>
        <text x="23" y="28" text-anchor="middle"
              font-family="Segoe UI,Arial,sans-serif" font-size="13">🗄</text>
        <!-- Table name -->
        <text x="${NODE_W / 2 + 6}" y="29" text-anchor="middle"
              font-family="Segoe UI,Arial,sans-serif" font-size="11.5"
              font-weight="700" fill="white">${escapeHtml(shortName)}</text>
        <!-- Column rows -->
        ${colRows}
      </g>`;
  }).join("");

  // ── Legend ────────────────────────────────────────────────────────────────
  const legendY = SVG_H - 26;
  const legend = `
    <g transform="translate(${PAD_X}, ${legendY})">
      <line x1="0" y1="8" x2="28" y2="8" stroke="#0078D4" stroke-width="2"
            marker-end="url(#leg-many)" marker-start="url(#leg-one)"/>
      <text x="34" y="12" font-family="Segoe UI,Arial,sans-serif" font-size="10" fill="#605E5C">${t().relActive}</text>
      <line x1="90" y1="8" x2="118" y2="8" stroke="#A19F9D" stroke-width="1.5"
            stroke-dasharray="5,3"/>
      <text x="124" y="12" font-family="Segoe UI,Arial,sans-serif" font-size="10" fill="#605E5C">${t().relInactive}</text>
      <defs>
        <marker id="leg-many" viewBox="-2 -6 14 12" refX="12" refY="0"
          markerWidth="12" markerHeight="10" orient="auto">
          <line x1="0" y1="-4" x2="9" y2="0" stroke="#0078D4" stroke-width="1.5"/>
          <line x1="0" y1="4"  x2="9" y2="0" stroke="#0078D4" stroke-width="1.5"/>
          <line x1="0" y1="0"  x2="9" y2="0" stroke="#0078D4" stroke-width="1.5"/>
        </marker>
        <marker id="leg-one" viewBox="-2 -6 12 12" refX="10" refY="0"
          markerWidth="10" markerHeight="10" orient="auto-start-reverse">
          <line x1="6" y1="-4" x2="6" y2="4" stroke="#0078D4" stroke-width="1.5"/>
          <line x1="2" y1="-4" x2="2" y2="4" stroke="#0078D4" stroke-width="1.5"/>
        </marker>
      </defs>
    </g>`;

  els.relDiagram.innerHTML = `
    <svg viewBox="0 0 ${SVG_W} ${SVG_H}" width="${SVG_W}" height="${SVG_H}"
         xmlns="http://www.w3.org/2000/svg"
         style="display:block;font-family:Segoe UI,Arial,sans-serif">
      <defs>${defs.join("")}</defs>
      ${edges.join("")}
      ${tableCards}
      ${labels.join("")}
      ${legend}
    </svg>`;
}

// ─── Fim Relacionamentos ───────────────────────────────────────────────────────

// ─── Arquitetura ──────────────────────────────────────────────────────────────

/**
 * Builds architecture data: for each source node, collects the queries that
 * depend on it and extracts the connection path from the M expression
 * (the value after "Source =" or the first connector call arguments).
 */
function buildArchitectureData(graph) {
  const nodes = graph.nodes || [];
  const edges = graph.edges || [];

  const sourceNodes = nodes.filter((n) => n.type === "source");
  const queryNodes  = nodes.filter((n) => n.type === "query");

  // Map source id -> queries that depend on it
  const sourceToQueries = new Map(sourceNodes.map((s) => [s.id, []]));

  edges.forEach((e) => {
    if (sourceToQueries.has(e.from)) {
      const query = queryNodes.find((q) => q.id === e.to);
      if (query) sourceToQueries.get(e.from).push(query);
    }
  });

  return sourceNodes.map((source) => {
    const queriesForSource = sourceToQueries.get(source.id) || [];

    const queries = queriesForSource.map((q) => {
      const expr = (q.meta && q.meta.expression) ? q.meta.expression : "";
      const precomputed = (q.meta && q.meta.connectionPath) ? q.meta.connectionPath : null;
      return {
        name: q.label,
        connectionPath: precomputed !== null ? precomputed : extractConnectionPath(expr, source),
        expression: expr,
      };
    });

    // If no queries are linked but source has its own pattern, show a path
    const sourceExpr = (source.meta && source.meta.expression) ? source.meta.expression : "";
    const fallbackPath = queries.length === 0 && sourceExpr
      ? extractConnectionPath(sourceExpr, source)
      : "";

    return {
      sourceId:   source.id,
      sourceName: source.label,
      iconUrl:    source.iconUrl || "",
      icon:       source.icon || initials(source.label),
      color:      (source.meta && source.meta.color) ? source.meta.color : "#2176ae",
      fallbackPath,
      queries,
    };
  });
}

/**
 * Extracts the human-readable connection path from an M expression.
 * Looks for:
 *   1. Source = ConnectorFunction("arg1", "arg2", ...)  — first string args
 *   2. File.Path = "..." or path = "..."
 *   3. url = "..."
 *   4. Fallback: first quoted string in the expression
 */
function extractConnectionPath(expr, source) {
  if (!expr) return "";

  // Pattern: ConnectorFunction("server", "database") or ("url") — get args
  const pattern = (source.meta && source.meta.pattern) ? source.meta.pattern : "";
  if (pattern) {
    const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Match ConnectorFunc("arg1"[, "arg2"])
    const callRx = new RegExp(escaped + '\\s*\\(([^)]{0,400})\\)', 'i');
    const callMatch = expr.match(callRx);
    if (callMatch) {
      const argsStr = callMatch[1];
      const args = [];
      const argRx = /"([^"]{1,300})"/g;
      let m;
      while ((m = argRx.exec(argsStr)) !== null) args.push(m[1]);
      if (args.length) return args.join(" › ");
    }
  }

  // "Source = SomeFunc("path")" — generic
  const sourceAssign = expr.match(/[Ss]ource\s*=\s*\w[\w.]*\s*\(([^)]{0,400})\)/);
  if (sourceAssign) {
    const args = [];
    const argRx = /"([^"]{1,300})"/g;
    let m;
    while ((m = argRx.exec(sourceAssign[1])) !== null) args.push(m[1]);
    if (args.length) return args.join(" › ");
  }

  // File path or URL patterns
  const pathPatterns = [
    /(?:FilePath|file_path|FileName|path)\s*=\s*"([^"]{1,400})"/i,
    /(?:url|URL|Url)\s*=\s*"([^"]{1,400})"/i,
    /https?:\/\/[^\s"']{4,200}/,
    /[A-Za-z]:[\\\/][^"'\r\n]{4,200}/,
    /\\\\[^"'\r\n]{4,200}/,
  ];
  for (const rx of pathPatterns) {
    const m = expr.match(rx);
    if (m) return m[1] || m[0];
  }

  // First quoted string of reasonable length
  const firstQuoted = expr.match(/"([^"]{3,200})"/);
  if (firstQuoted) return firstQuoted[1];

  return "";
}

function renderArchitecture() {
  const T    = t();
  const arch = state.architecture;

  if (!arch || arch.length === 0) {
    els.archEmpty.classList.remove("hidden");
    els.archContent.classList.add("hidden");
    return;
  }

  els.archEmpty.classList.add("hidden");
  els.archContent.classList.remove("hidden");

  renderArchDiagram(arch);
}

function renderArchDiagram(arch) {
  const CONNECTOR_COLORS = {
    "SQL Server":    "#0078D4",
    "Excel":         "#217346",
    "Web":           "#6f52b8",
    "SharePoint":    "#0b6a0b",
    "SharePoint Files": "#0b6a0b",
    "OData":         "#b23a48",
    "CSV":           "#d39200",
    "Folder":        "#4d6b7c",
    "JSON":          "#7a5c1f",
    "Analysis Services": "#5266b8",
    "Oracle":        "#c3423f",
    "PostgreSQL":    "#35668d",
    "MySQL":         "#c7762f",
    "Snowflake":     "#4197b5",
    "Databricks":    "#d64d39",
    "Power Platform Dataflows": "#4f7bd9",
    "Azure Blob Storage": "#0078D4",
    "Azure Data Lake": "#0078D4",
    "Google Analytics": "#d39200",
    "Salesforce":    "#2b8f9f",
    "SAP BW":        "#5266b8",
  };

  // Build source card HTML for each source
  const sourceCards = arch.map((src) => {
    const color = CONNECTOR_COLORS[src.sourceName] || src.color || "#2176ae";

    // Icon markup
    const iconMarkup = src.iconUrl
      ? `<img src="${escapeHtml(src.iconUrl)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><span class="arch-icon-text" style="display:none">${escapeHtml(src.icon)}</span>`
      : `<span class="arch-icon-text">${escapeHtml(src.icon)}</span>`;

    // Queries list
    let queriesHtml;
    if (src.queries && src.queries.length > 0) {
      queriesHtml = src.queries.map((q) => {
        const pathDisplay = q.connectionPath
          ? `<span class="arch-query-label">${escapeHtml(q.name)}</span><span class="arch-query-text">${escapeHtml(q.connectionPath)}</span>`
          : `<span class="arch-query-label">${escapeHtml(q.name)}</span>`;
        return `
          <div class="arch-query-item">
            <span class="arch-query-bullet"></span>
            <span>${pathDisplay}</span>
          </div>`;
      }).join("");
    } else if (src.fallbackPath) {
      queriesHtml = `
        <div class="arch-query-item">
          <span class="arch-query-bullet"></span>
          <span class="arch-query-text">${escapeHtml(src.fallbackPath)}</span>
        </div>`;
    } else {
      queriesHtml = `<div class="arch-no-queries">${escapeHtml(t().archNoQueries)}</div>`;
    }

    return `
      <div class="arch-source-card" style="border-top-color:${color}" data-source-id="${escapeHtml(src.sourceId)}">
        <div class="arch-source-header">
          <div class="arch-source-icon" style="background:${color}">
            ${iconMarkup}
          </div>
          <span class="arch-source-name">${escapeHtml(src.sourceName)}</span>
        </div>
        <div class="arch-queries-list">
          ${queriesHtml}
        </div>
      </div>`;
  }).join("");

  // Power BI target node
  const pbiNode = `
    <div class="arch-pbi-node">
      <div class="arch-pbi-badge">
        <img class="arch-pbi-logo" src="image/Power_BI_Logo.png" alt="Power BI"
             onerror="this.style.display='none';this.nextElementSibling.style.display='grid'" />
        <div class="arch-pbi-logo-fallback" style="display:none">PBI</div>
        <div>
          <div>Power BI</div>
          <div class="arch-pbi-label">${escapeHtml(t().archPbiLabel)}</div>
        </div>
      </div>
      <div style="font-size:11px;color:var(--muted);margin-top:4px">${escapeHtml(t().archSourcesCount(arch.length))}</div>
    </div>`;

  els.archDiagram.innerHTML = `
    <div class="arch-layout" id="archLayoutRoot">
      <div class="arch-sources-col" id="archSourcesCol">
        ${sourceCards}
      </div>
      <div class="arch-center-col" id="archCenterCol">
        <svg id="archSvg" class="arch-svg-layer" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      <div class="arch-pbi-col" id="archPbiCol">
        ${pbiNode}
      </div>
    </div>`;

  // Draw SVG connector lines after DOM paint
  requestAnimationFrame(() => drawArchConnectors(arch));
}

function drawArchConnectors(arch) {
  const layout   = document.getElementById("archLayoutRoot");
  const sourcesCol = document.getElementById("archSourcesCol");
  const pbiCol   = document.getElementById("archPbiCol");
  const svg      = document.getElementById("archSvg");
  if (!layout || !sourcesCol || !pbiCol || !svg) return;

  const layoutRect   = layout.getBoundingClientRect();
  const pbiRect      = pbiCol.getBoundingClientRect();
  const sourceCards  = sourcesCol.querySelectorAll(".arch-source-card");

  // Destination: left-center of the PBI badge
  const pbiX = pbiRect.left - layoutRect.left;
  const pbiY = pbiRect.top  - layoutRect.top + pbiRect.height / 2;

  // Set SVG to fill the center column
  const centerCol = document.getElementById("archCenterCol");
  const centerRect = centerCol.getBoundingClientRect();
  svg.setAttribute("width",  centerRect.width);
  svg.setAttribute("height", centerRect.height);
  svg.style.width  = centerRect.width  + "px";
  svg.style.height = centerRect.height + "px";

  const CONNECTOR_COLORS = {
    "SQL Server":  "#0078D4", "Excel": "#217346", "Web": "#6f52b8",
    "SharePoint":  "#0b6a0b", "SharePoint Files": "#0b6a0b",
    "OData":       "#b23a48", "CSV": "#d39200", "Folder": "#4d6b7c",
    "JSON":        "#7a5c1f", "Analysis Services": "#5266b8",
    "Oracle":      "#c3423f", "PostgreSQL": "#35668d", "MySQL": "#c7762f",
    "Snowflake":   "#4197b5", "Databricks": "#d64d39",
    "Power Platform Dataflows": "#4f7bd9",
    "Azure Blob Storage": "#0078D4", "Azure Data Lake": "#0078D4",
    "Google Analytics": "#d39200", "Salesforce": "#2b8f9f", "SAP BW": "#5266b8",
  };

  let paths = "";
  sourceCards.forEach((card, i) => {
    const cardRect = card.getBoundingClientRect();
    const srcX = cardRect.right  - layoutRect.left;
    const srcY = cardRect.top    - layoutRect.top + cardRect.height / 2;

    // Translate to SVG coordinate space (center col)
    const svgOffX = centerRect.left - layoutRect.left;
    const svgOffY = centerRect.top  - layoutRect.top;
    const x1 = srcX  - svgOffX;
    const y1 = srcY  - svgOffY;
    const x2 = pbiX  - svgOffX;
    const y2 = pbiY  - svgOffY;
    const cp = (x2 - x1) * 0.55;

    const srcName = arch[i] ? arch[i].sourceName : "";
    const color   = CONNECTOR_COLORS[srcName] || (arch[i] ? arch[i].color : "#8c98a3") || "#8c98a3";

    paths += `<path d="M ${x1} ${y1} C ${x1 + cp} ${y1}, ${x2 - cp} ${y2}, ${x2} ${y2}"
        fill="none" stroke="${color}" stroke-width="2.5" stroke-opacity="0.7"
        marker-end="url(#arch-arrow)"/>`;
  });

  svg.innerHTML = `
    <defs>
      <marker id="arch-arrow" viewBox="0 0 10 10" refX="10" refY="5"
              markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#1B2A38" opacity="0.7"/>
      </marker>
    </defs>
    ${paths}`;
}

// ─── Fim Arquitetura ──────────────────────────────────────────────────────────

function setGraph(graph, title, subtitle) {
  state.graph = layoutGraph(graph);
  state.selectedId = null;
  els.title.textContent = title;
  setSubtitle(subtitle);
  renderGraph();
}

function setSubtitle(text) {
  els.subtitle.textContent = text;
  els.subtitle.hidden = !text;
}

function layoutGraph(graph) {
  const order = ["source", "query", "model", "measure", "visual"];
  const columns = new Map(order.map((type) => [type, []]));
  graph.nodes.forEach((node) => {
    if (!columns.has(node.type)) columns.set(node.type, []);
    columns.get(node.type).push(node);
  });

  // Position all types except measure and calc_column normally
  columns.forEach((nodes, type) => {
    if (type === "calc_column") return; // handled below
    const column = order.indexOf(type) >= 0 ? order.indexOf(type) : order.length;
    nodes.forEach((node, row) => {
      node.x = 42 + column * 250;
      node.y = 42 + row * 120;
    });
  });

  // measure + calc_column share the same X column, stacked as one continuous list
  const measureColIdx = order.indexOf("measure");
  const measureNodes  = columns.get("measure") || [];
  const calcColNodes  = graph.nodes.filter((n) => n.type === "calc_column");
  [...measureNodes, ...calcColNodes].forEach((node, row) => {
    node.x = 42 + measureColIdx * 250;
    node.y = 42 + row * 120;
  });

  const measureAndCalc = measureNodes.length + calcColNodes.length;
  const maxRows = Math.max(
    1,
    ...Array.from(columns.entries())
      .filter(([type]) => type !== "calc_column")
      .map(([, nodes]) => nodes.length),
    measureAndCalc
  );
  graph.width  = Math.max(960, order.length * 250 + 120);
  graph.height = Math.max(680, maxRows * 120 + 120);
  return graph;
}

function renderGraph() {
  const graph = state.graph;
  const impactIds = state.selectedId ? downstream(state.selectedId, graph.edges) : new Set();

  // ── Modo Filtro de Linhagem ──────────────────────────────────────────────
  if (state.lineageFilter && state.selectedId) {
    const ancestorIds = upstream(state.selectedId, graph.edges);
    const lineageIds  = new Set([state.selectedId, ...ancestorIds, ...impactIds]);

    // Apenas nós da linhagem e que passam no filtro de tipo
    const lineageNodes = graph.nodes.filter(
      (n) => lineageIds.has(n.id) && state.enabledTypes.has(n.type)
    );

    renderLineageGraph(lineageNodes, graph.edges, impactIds, ancestorIds);
    els.emptyState.classList.add("hidden");
    updateMetrics(impactIds);
    renderDetails();
    return;
  }

  // ── Modo Normal ─────────────────────────────────────────────────────────
  const visibleNodes = graph.nodes.filter((n) => state.enabledTypes.has(n.type));
  const visibleIds   = new Set(visibleNodes.map((n) => n.id));

  // Re-pack the shared measure/calc_column column so there's no gap when
  // one type is hidden by the filter. Work on cloned positions so the
  // canonical layout (used by edge rendering) stays intact.
  const MEASURE_X = 42 + 3 * 250; // column index 3 = measure
  const sharedVisible = visibleNodes.filter(
    (n) => n.type === "measure" || n.type === "calc_column"
  );
  // Sort by their canonical y so relative order is preserved
  sharedVisible.sort((a, b) => a.y - b.y);
  const repacked = new Map(); // id → {x, y} overrides
  sharedVisible.forEach((n, row) => {
    repacked.set(n.id, { x: MEASURE_X, y: 42 + row * 120 });
  });

  // Apply overrides: mutate node positions temporarily for this render pass
  // (we restore after building cards and edges via a snapshot)
  const snapshot = new Map(
    graph.nodes
      .filter((n) => repacked.has(n.id))
      .map((n) => [n.id, { x: n.x, y: n.y }])
  );
  graph.nodes.forEach((n) => {
    if (repacked.has(n.id)) { n.x = repacked.get(n.id).x; n.y = repacked.get(n.id).y; }
  });

  // Recompute canvas height for the repacked column
  const maxVisibleRows = Math.max(
    1,
    ...["source","query","model","visual"].map(
      (t) => visibleNodes.filter((n) => n.type === t).length
    ),
    sharedVisible.length
  );
  const canvasH = Math.max(680, maxVisibleRows * 120 + 120);

  els.graphCanvas.innerHTML = "";
  els.graphCanvas.style.minWidth  = `${graph.width || 960}px`;
  els.graphCanvas.style.minHeight = `${canvasH}px`;
  els.edgeLayer.setAttribute("width",  graph.width || 960);
  els.edgeLayer.setAttribute("height", canvasH);
  els.edgeLayer.style.minWidth  = `${graph.width || 960}px`;
  els.edgeLayer.style.minHeight = `${canvasH}px`;

  visibleNodes.forEach((node) => {
    const card = buildNodeCard(node, impactIds);
    els.graphCanvas.appendChild(card);
  });



  renderEdges(
    graph.edges.filter((e) => visibleIds.has(e.from) && visibleIds.has(e.to)),
    graph.nodes,
    impactIds
  );

  // Restore canonical positions so lineage mode / exports are unaffected
  graph.nodes.forEach((n) => {
    if (snapshot.has(n.id)) { n.x = snapshot.get(n.id).x; n.y = snapshot.get(n.id).y; }
  });

  els.emptyState.classList.toggle("hidden", visibleNodes.length > 0);
  updateMetrics(impactIds);
  renderDetails();
}

// Renderiza apenas os nós da linhagem, reposicionados verticalmente por coluna
function renderLineageGraph(lineageNodes, allEdges, impactIds, ancestorIds) {
  const CARD_W  = 220;
  const CARD_H  = 74;
  const GAP_X   = 250;
  const GAP_Y   = 100;  // compacto verticalmente
  const PAD     = 42;

  const order = ["source", "query", "model", "measure", "visual"];

  // Agrupa por coluna (tipo)
  const columns = new Map(order.map((t) => [t, []]));
  lineageNodes.forEach((n) => {
    const col = columns.get(n.type) || columns.get("measure"); // calc_column → measure col
    if (col) col.push(n);
  });

  // Posiciona cada nó na sua coluna com espaçamento compacto
  const positioned = lineageNodes.map((n) => ({ ...n })); // cópia para não mutar o grafo original
  const byId = new Map(positioned.map((n) => [n.id, n]));

  // First pass: position normal types
  columns.forEach((nodes, type) => {
    const colIdx = order.indexOf(type);
    // For measure column we'll do a second pass to interleave calc_column
    if (type !== "measure") {
      nodes.forEach((origNode, row) => {
        const n = byId.get(origNode.id);
        if (n) { n.x = PAD + colIdx * GAP_X; n.y = PAD + row * GAP_Y; }
      });
    }
  });

  // Second pass: measure column — measures first, then calc_columns
  const measureColIdx = order.indexOf("measure");
  const measureNodesInLineage = lineageNodes.filter((n) => n.type === "measure");
  const calcColNodesInLineage  = lineageNodes.filter((n) => n.type === "calc_column");
  [...measureNodesInLineage, ...calcColNodesInLineage].forEach((origNode, row) => {
    const n = byId.get(origNode.id);
    if (n) { n.x = PAD + measureColIdx * GAP_X; n.y = PAD + row * GAP_Y; }
  });

  const maxRows = Math.max(
    1,
    ...Array.from(columns.entries())
      .filter(([type]) => type !== "measure")
      .map(([, col]) => col.length),
    measureNodesInLineage.length + calcColNodesInLineage.length
  );
  const w = Math.max(960,  order.length * GAP_X + PAD * 2);
  const h = Math.max(400,  maxRows * GAP_Y + PAD * 2);

  els.graphCanvas.innerHTML = "";
  els.graphCanvas.style.minWidth  = `${w}px`;
  els.graphCanvas.style.minHeight = `${h}px`;
  els.edgeLayer.setAttribute("width",  w);
  els.edgeLayer.setAttribute("height", h);
  els.edgeLayer.style.minWidth  = `${w}px`;
  els.edgeLayer.style.minHeight = `${h}px`;

  const lineageIds = new Set(positioned.map((n) => n.id));

  positioned.forEach((node) => {
    const card = buildNodeCard(node, impactIds, ancestorIds);
    els.graphCanvas.appendChild(card);
  });

  renderEdges(
    allEdges.filter((e) => lineageIds.has(e.from) && lineageIds.has(e.to)),
    positioned,
    impactIds
  );
}

// Constrói um card de nó (extraído para reutilizar nos dois modos)
function buildNodeCard(node, impactIds, ancestorIds = new Set()) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `node-card ${node.type}`;
  if (node.id === state.selectedId)  card.classList.add("selected");
  if (impactIds.has(node.id))        card.classList.add("impacted");
  if (ancestorIds.has(node.id))      card.classList.add("ancestor");
  if (
    state.selectedId &&
    node.id !== state.selectedId &&
    !impactIds.has(node.id) &&
    !state.lineageFilter          // no modo normal mantém dimmed
  ) {
    card.classList.add("dimmed");
  }
  card.style.left = `${node.x}px`;
  card.style.top  = `${node.y}px`;
  card.dataset.nodeId = node.id;
  card.setAttribute("role", "listitem");
  const iconText = escapeHtml(node.icon || initials(node.label));
  const iconUrl = node.iconUrl ? escapeHtml(node.iconUrl) : "";
  const iconMarkup = iconUrl
    ? `<span class="connector-icon has-image"><img src="${iconUrl}" alt="" loading="lazy" onerror="this.classList.add('hidden-icon')" /><span class="icon-fallback">${iconText}</span></span>`
    : `<span class="connector-icon"><span class="icon-fallback">${iconText}</span></span>`;
  card.innerHTML = `
    ${iconMarkup}
    <span>
      <span class="node-title">${escapeHtml(node.label)}</span>
      <span class="node-subtitle">${typeLabels()[node.type] || node.type}</span>
    </span>
  `;
  card.addEventListener("click", () => selectNode(node.id));
  return card;
}

function renderEdges(edges, nodes, impactIds) {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const lines = edges.map((edgeItem) => {
    const from = byId.get(edgeItem.from);
    const to = byId.get(edgeItem.to);
    if (!from || !to) return "";
    const x1 = from.x + 220;
    const y1 = from.y + 37;
    const x2 = to.x;
    const y2 = to.y + 37;
    const mid = x1 + Math.max(40, (x2 - x1) / 2);
    const active = state.selectedId && (edgeItem.from === state.selectedId || impactIds.has(edgeItem.to));
    const stroke = active ? "#b23a48" : "#8c98a3";
    const width = active ? 3 : 2;
    return `<path d="M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}" fill="none" stroke="${stroke}" stroke-width="${width}" marker-end="url(#arrow)" />`;
  });

  els.edgeLayer.innerHTML = `
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#8c98a3"></path>
      </marker>
    </defs>
    ${lines.join("")}
  `;
}

function selectNode(id) {
  state.selectedId = state.selectedId === id ? null : id;
  renderGraph();
}

function renderDetails() {
  const node = state.graph.nodes.find((item) => item.id === state.selectedId);
  if (!node) {
    els.details.innerHTML = `<p>${t().detailsPlaceholder}</p>`;
    return;
  }

  const incoming = state.graph.edges.filter((edgeItem) => edgeItem.to === node.id).length;
  const affected = Array.from(downstream(node.id, state.graph.edges));
  const sample = node.meta.expression ? `<code>${escapeHtml(node.meta.expression.slice(0, 1200))}</code>` : "";

  els.details.innerHTML = `
    <h3>${escapeHtml(node.label)}</h3>
    <div class="node-meta">${typeLabels()[node.type] || node.type}</div>
    <p>${t().detailsDirectDeps} ${incoming}</p>
    <p>${t().detailsImpacted} ${affected.length}</p>
    ${affected.length ? `<p>${t().detailsAffects} ${affected.map(labelForId).join(", ")}</p>` : ""}
    ${sample}
  `;
}

function updateMetrics(impactIds) {
  els.sourceCount.textContent = state.graph.nodes.filter((node) => node.type === "source").length;
  els.queryCount.textContent = state.graph.nodes.filter((node) => node.type === "query").length;
  els.nodeCount.textContent = state.graph.nodes.length;
  els.impactCount.textContent = impactIds.size;
}

// Nós ancestrais (que alimentam startId, subindo o grafo)
function upstream(startId, edges) {
  const result = new Set();
  const queue = [startId];
  while (queue.length) {
    const current = queue.shift();
    edges
      .filter((e) => e.to === current)
      .forEach((e) => {
        if (!result.has(e.from)) {
          result.add(e.from);
          queue.push(e.from);
        }
      });
  }
  return result;
}

function downstream(startId, edges) {
  const result = new Set();
  const queue = [startId];
  while (queue.length) {
    const current = queue.shift();
    edges
      .filter((edgeItem) => edgeItem.from === current)
      .forEach((edgeItem) => {
        if (!result.has(edgeItem.to)) {
          result.add(edgeItem.to);
          queue.push(edgeItem.to);
        }
      });
  }
  return result;
}

function fitGraph() {
  document.querySelector(".graph-frame").scrollTo({ left: 0, top: 0, behavior: "smooth" });
}

function exportGraph() {
  const jsonStr = JSON.stringify(state.graph, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const filename = "bi-flow-mapper-lineage.json";

  // pywebview blocks link.click() — use the Python bridge when available
  if (window.pywebview && window.pywebview.api && window.pywebview.api.save_file) {
    const b64 = btoa(unescape(encodeURIComponent(jsonStr)));
    window.pywebview.api.save_file(b64, filename, "application/json")
      .then((result) => {
        if (result && !result.ok && result.reason !== "cancelled") {
          console.error("[BIFlowMapper] save_file error:", result.reason);
        }
      })
      .catch((err) => console.error("[BIFlowMapper] save_file exception:", err));
    return;
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

async function exportDocumentation() {
  const T = t();
  if (!state.lastPbixFile) {
    alert(T.docxNoPbix);
    return;
  }

  const buttonText = els.exportDocxButton.querySelector(".btn-text");
  const previousText = buttonText.textContent;
  els.exportDocxButton.disabled = true;
  buttonText.textContent = T.docxGenerating;

  const form = new FormData();
  form.append("pbix", state.lastPbixFile, state.lastPbixFile.name);

  try {
    const response = await fetch("/api/export-docx", {
      method: "POST",
      headers: {
        "X-BIFM-Locale": locale
      },
      body: form
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    const blob = await response.blob();
    const suggestedName =
      filenameFromDisposition(response.headers.get("Content-Disposition")) ||
      `${slug(state.lastPbixFile.name.replace(/\.[^.]+$/, ""))}_${locale === "pt-BR" ? "documentacao" : "documentation"}.docx`;

    // pywebview blocks link.click() — use the Python bridge when available
    if (window.pywebview && window.pywebview.api && window.pywebview.api.save_file) {
      const b64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      const result = await window.pywebview.api.save_file(
        b64,
        suggestedName,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      );
      if (result && !result.ok && result.reason !== "cancelled") {
        throw new Error(result.reason);
      }
      return;
    }

    // Fallback: normal browser download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = suggestedName;
    link.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error);
    alert(T.docxError);
  } finally {
    els.exportDocxButton.disabled = false;
    buttonText.textContent = previousText || T.btnDocx;
  }
}

function filenameFromDisposition(value) {
  if (!value) return "";
  const utf8Match = value.match(/filename\*=UTF-8''([^;]+)/i);
  if (utf8Match) return decodeURIComponent(utf8Match[1]);
  const asciiMatch = value.match(/filename="?([^";]+)"?/i);
  return asciiMatch ? asciiMatch[1] : "";
}

// ── Exportar Imagem PNG ────────────────────────────────────────────────────────

async function exportImage() {
  if (state.activeTab === "relacionamentos") return exportRelImage();
  if (state.activeTab === "arquitetura") return exportArchImage();
  if (state.activeTab === "paginas") return exportPagesImage();

  // Coleta os nós e edges atualmente visíveis no canvas DOM
  const cards = Array.from(els.graphCanvas.querySelectorAll(".node-card"));
  if (!cards.length) return;

  // Lê posição e dados de cada card diretamente do DOM
  const nodeRects = cards.map((card) => ({
    x:       parseInt(card.style.left,  10),
    y:       parseInt(card.style.top,   10),
    w:       220,
    h:       74,
    label:   card.querySelector(".node-title")?.textContent   || "",
    sub:     card.querySelector(".node-subtitle")?.textContent || "",
    icon:    card.querySelector(".icon-fallback")?.textContent?.trim() || "",
    iconUrl: card.querySelector(".connector-icon img")?.src || "",
    type:    [...card.classList].find((c) => TYPE_LABELS_KEYS.includes(c)) || "model",
    id:      card.dataset.nodeId || "",
    selected: card.classList.contains("selected"),
    impacted: card.classList.contains("impacted"),
    ancestor: card.classList.contains("ancestor"),
  }));
  const nodeById = new Map(nodeRects.map((node) => [node.id, node]));

  const iconPromises = nodeRects.map((node) => {
    if (!node.iconUrl) return Promise.resolve(null);
    return loadImageElement(node.iconUrl).catch(() => null);
  });
  const iconImages = await Promise.all(iconPromises);
  nodeRects.forEach((node, index) => { node.iconImage = iconImages[index]; });

  const TYPE_COLORS = {
    source:      "#0078D4",
    query:       "#F2C811",
    model:       "#107C10",
    measure:     "#D83B01",
    calc_column: "#9B5094",
    visual:      "#8764B8",
  };

  const PAD   = 48;
  const maxX  = Math.max(...nodeRects.map((n) => n.x + n.w)) + PAD;
  const maxY  = Math.max(...nodeRects.map((n) => n.y + n.h)) + PAD;
  const width = maxX + PAD;
  const height = maxY + PAD;
  const DPR   = 2; // resolução 2×

  const canvas = document.createElement("canvas");
  canvas.width  = width * DPR;
  canvas.height = height * DPR;

  const ctx = canvas.getContext("2d");
  ctx.scale(DPR, DPR);

  // Fundo igual ao canvas do mapa
  ctx.fillStyle = "#EEECEA";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#C8C6C4";
  const GRID = 24;
  const DOT = 1.25;
  for (let gx = 0; gx < width; gx += GRID) {
    for (let gy = 0; gy < height; gy += GRID) {
      ctx.beginPath();
      ctx.arc(gx + GRID / 2, gy + GRID / 2, DOT, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Lê edges do SVG atual
  const visibleIds = new Set(nodeRects.map((node) => node.id));
  const exportEdges = state.graph.edges.filter((edgeItem) => visibleIds.has(edgeItem.from) && visibleIds.has(edgeItem.to));

  exportEdges.forEach((edgeItem) => {
    const from = nodeById.get(edgeItem.from);
    const to = nodeById.get(edgeItem.to);
    if (!from || !to) return;

    const active = state.selectedId && (edgeItem.from === state.selectedId || to.impacted);
    const stroke = active ? "#b23a48" : "#8c98a3";
    const sw = active ? 3 : 2;
    drawCanvasEdge(ctx, from, to, PAD, stroke, sw);
  });

  // Desenha os nós
  nodeRects.forEach((n) => {
    const color = TYPE_COLORS[n.type] || "#2176ae";
    const x = n.x + PAD;
    const y = n.y + PAD;

    // Sombra
    ctx.save();
    ctx.shadowColor   = "rgba(23,33,43,0.13)";
    ctx.shadowBlur    = 18;
    ctx.shadowOffsetY = 6;

    // Card background
    roundRect(ctx, x, y, n.w, n.h, 8);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    ctx.restore();

    // Borda esquerda colorida
    roundRect(ctx, x, y, 5, n.h, [8, 0, 0, 8]);
    ctx.fillStyle = color;
    ctx.fill();

    // Borda de destaque (selecionado / impactado / ancestor)
    if (n.selected || n.impacted || n.ancestor) {
      const hlColor = n.impacted  ? "rgba(178,58,72,0.35)"
                    : n.ancestor  ? "rgba(33,118,174,0.3)"
                    :               "rgba(40,160,134,0.3)";
      roundRect(ctx, x - 2, y - 2, n.w + 4, n.h + 4, 10);
      ctx.strokeStyle = hlColor;
      ctx.lineWidth   = 3;
      ctx.stroke();
    }

    // Ícone colorido
    const iconSize = 36;
    const iconX    = x + 12;
    const iconY    = y + (n.h - iconSize) / 2;
    roundRect(ctx, iconX, iconY, iconSize, iconSize, 8);
    ctx.fillStyle = color;
    ctx.fill();

    if (n.iconImage) {
      const imgSize = 30;
      const imgOffset = (iconSize - imgSize) / 2;
      ctx.drawImage(n.iconImage, iconX + imgOffset, iconY + imgOffset, imgSize, imgSize);
    } else {
      ctx.fillStyle   = "#ffffff";
      ctx.font        = `800 11px Inter, Segoe UI, Arial, sans-serif`;
      ctx.textAlign   = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(n.icon.slice(0, 4), iconX + iconSize / 2, iconY + iconSize / 2);
    }

    // Label principal
    ctx.fillStyle    = "#17212b";
    ctx.font         = `700 13px Inter, Segoe UI, Arial, sans-serif`;
    ctx.textAlign    = "left";
    ctx.textBaseline = "alphabetic";
    const textX = x + 12 + iconSize + 10;
    const maxW  = n.w - iconSize - 34;
    ctx.fillText(truncateText(ctx, n.label, maxW), textX, y + 30);

    // Subtítulo
    ctx.fillStyle = "#5d6b78";
    ctx.font      = `400 11px Inter, Segoe UI, Arial, sans-serif`;
    ctx.fillText(n.sub, textX, y + 48);
  });

  // Rodapé com nome do arquivo e data
  const title     = els.title.textContent || "BI Flow Mapper";
  const timestamp = t().exportTimestamp();
  ctx.fillStyle   = "rgba(93,107,120,0.7)";
  ctx.font        = `400 11px Inter, Segoe UI, Arial, sans-serif`;
  ctx.textAlign   = "right";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(`${title}  ·  ${timestamp}`, maxX + PAD - 8, maxY + PAD - 10);

  // Download — usa downloadCanvas() para compatibilidade com pywebview
  const filename = (title.replace(/[^a-z0-9]/gi, "_").toLowerCase() || "lineage") + ".png";
  downloadCanvas(canvas, filename);
}

function exportRelImage() {
  const svg = els.relDiagram.querySelector("svg");
  if (!svg) return;

  const width = parseInt(svg.getAttribute("width") || svg.viewBox.baseVal.width, 10) || 960;
  const height = parseInt(svg.getAttribute("height") || svg.viewBox.baseVal.height, 10) || 420;
  const xml = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    const DPR = 2;
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.drawImage(img, 0, 0, width, height);
    downloadCanvas(canvas, exportFilename());
    URL.revokeObjectURL(url);
  };
  img.onerror = () => URL.revokeObjectURL(url);
  img.src = url;
}

async function exportArchImage() {
  const arch = state.architecture;
  if (!arch || !arch.length) return;

  // ── 1. Gather DOM measurements from the live rendered layout ──────────────
  const layout    = document.getElementById("archLayoutRoot");
  const pbiCol    = document.getElementById("archPbiCol");
  const sourcesCol = document.getElementById("archSourcesCol");
  const archSvg   = document.getElementById("archSvg");
  if (!layout || !pbiCol || !sourcesCol) {
    // Fallback: tab not yet rendered — switch to it briefly, then retry
    return;
  }

  const DPR     = 2;
  const PAD     = 32; // extra whitespace around entire diagram
  const layoutR = layout.getBoundingClientRect();

  // Measure every source card
  const cardEls = Array.from(sourcesCol.querySelectorAll(".arch-source-card"));

  // Measure PBI node
  const pbiNodeEl = pbiCol.querySelector(".arch-pbi-node");
  const pbiR = pbiNodeEl
    ? pbiNodeEl.getBoundingClientRect()
    : pbiCol.getBoundingClientRect();

  // Total canvas size = layout bounding box + padding
  const totalW = layoutR.width  + PAD * 2;
  const totalH = layoutR.height + PAD * 2;

  const canvas = document.createElement("canvas");
  canvas.width  = totalW * DPR;
  canvas.height = totalH * DPR;
  const ctx = canvas.getContext("2d");
  ctx.scale(DPR, DPR);

  // ── 2. Background — same dotted canvas as live ─────────────────────────────
  ctx.fillStyle = "#EEECEA";
  ctx.fillRect(0, 0, totalW, totalH);
  ctx.fillStyle = "#C8C6C4";
  const GRID = 24;
  for (let gx = 0; gx < totalW; gx += GRID)
    for (let gy = 0; gy < totalH; gy += GRID) {
      ctx.beginPath();
      ctx.arc(gx + GRID / 2, gy + GRID / 2, 1.25, 0, Math.PI * 2);
      ctx.fill();
    }

  // Helper: convert page rect → canvas coords
  function toCanvas(r) {
    return {
      x: r.left - layoutR.left + PAD,
      y: r.top  - layoutR.top  + PAD,
      w: r.width,
      h: r.height,
    };
  }

  // ── 3. Pre-load connector icons as Image elements ─────────────────────────
  const iconImgMap = {};
  await Promise.all(arch.map(async (src) => {
    if (!src.iconUrl) return;
    try { iconImgMap[src.iconUrl] = await loadImageElement(src.iconUrl); }
    catch { /* skip */ }
  }));
  let pbiLogoImg = null;
  try { pbiLogoImg = await loadImageElement("image/Power_BI_Logo.png"); }
  catch { /* skip */ }

  // ── 4. Draw connector curves (read from live SVG paths) ───────────────────
  const CONNECTOR_COLORS = {
    "SQL Server": "#0078D4", "Excel": "#217346", "Web": "#6f52b8",
    "SharePoint": "#0b6a0b", "SharePoint Files": "#0b6a0b",
    "OData": "#b23a48", "CSV": "#d39200", "Folder": "#4d6b7c",
    "JSON": "#7a5c1f", "Analysis Services": "#5266b8",
    "Oracle": "#c3423f", "PostgreSQL": "#35668d", "MySQL": "#c7762f",
    "Snowflake": "#4197b5", "Databricks": "#d64d39",
    "Power Platform Dataflows": "#4f7bd9",
    "Azure Blob Storage": "#0078D4", "Azure Data Lake": "#0078D4",
    "Google Analytics": "#d39200", "Salesforce": "#2b8f9f", "SAP BW": "#5266b8",
  };

  // PBI badge entry point
  const pbiC = toCanvas(pbiR);
  const pbiEntryX = pbiC.x;
  const pbiEntryY = pbiC.y + pbiC.h / 2;

  // Arrow head helper
  function drawArrowHead(x, y, angle, color) {
    const size = 9;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.75;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-size, -size * 0.45);
    ctx.lineTo(-size,  size * 0.45);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  cardEls.forEach((cardEl, i) => {
    const cardR = toCanvas(cardEl.getBoundingClientRect());
    const srcName = arch[i] ? arch[i].sourceName : "";
    const color   = CONNECTOR_COLORS[srcName] || (arch[i] ? arch[i].color : "#8c98a3") || "#8c98a3";

    const x1 = cardR.x + cardR.w;
    const y1 = cardR.y + cardR.h / 2;
    const x2 = pbiEntryX;
    const y2 = pbiEntryY;
    const cp = (x2 - x1) * 0.55;

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth   = 2.5;
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(x1 + cp, y1, x2 - cp, y2, x2, y2);
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.restore();

    // Arrowhead at destination
    const angle = Math.atan2(y2 - (y1 * 0.05 + y2 * 0.95), x2 - (x1 * 0.05 + x2 * 0.95));
    drawArrowHead(x2, y2, angle, "#1B2A38");
  });

  // ── 5. Draw each source card ───────────────────────────────────────────────
  function roundRectPath(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  cardEls.forEach((cardEl, i) => {
    const src   = arch[i];
    const cardR = toCanvas(cardEl.getBoundingClientRect());
    const { x, y, w, h } = cardR;
    const color = CONNECTOR_COLORS[src.sourceName] || src.color || "#2176ae";
    const RAD   = 10;
    const TOP_BAR = 4;

    // Shadow
    ctx.save();
    ctx.shadowColor   = "rgba(23,33,43,0.13)";
    ctx.shadowBlur    = 16;
    ctx.shadowOffsetY = 5;
    roundRectPath(x, y, w, h, RAD);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.restore();

    // Border
    roundRectPath(x, y, w, h, RAD);
    ctx.strokeStyle = "#C8C6C4";
    ctx.lineWidth   = 1.5;
    ctx.stroke();

    // Top colour bar
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + RAD, y);
    ctx.lineTo(x + w - RAD, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + RAD);
    ctx.lineTo(x + w, y + TOP_BAR);
    ctx.lineTo(x, y + TOP_BAR);
    ctx.lineTo(x, y + RAD);
    ctx.quadraticCurveTo(x, y, x + RAD, y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();

    // ── Header: read exact dimensions from DOM elements ────────────────────
    const headerEl = cardEl.querySelector(".arch-source-header");
    const iconEl   = cardEl.querySelector(".arch-source-icon");
    const nameEl   = cardEl.querySelector(".arch-source-name");

    const headerR = headerEl ? toCanvas(headerEl.getBoundingClientRect()) : null;
    const iconR   = iconEl   ? toCanvas(iconEl.getBoundingClientRect())   : null;
    const nameR   = nameEl   ? toCanvas(nameEl.getBoundingClientRect())   : null;

    // Icon box
    if (iconR) {
      roundRectPath(iconR.x, iconR.y, iconR.w, iconR.h, 4);
      ctx.fillStyle = color;
      ctx.fill();

      const iconImg = src.iconUrl ? iconImgMap[src.iconUrl] : null;
      if (iconImg) {
        const pad = 4;
        ctx.drawImage(iconImg, iconR.x + pad, iconR.y + pad, iconR.w - pad * 2, iconR.h - pad * 2);
      } else {
        ctx.fillStyle    = "#fff";
        ctx.font         = `800 9px Segoe UI, Arial, sans-serif`;
        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(src.icon || "SRC", iconR.x + iconR.w / 2, iconR.y + iconR.h / 2);
      }
    }

    // Source name
    if (nameR) {
      ctx.fillStyle    = "#201F1E";
      ctx.font         = `700 13px Segoe UI, Arial, sans-serif`;
      ctx.textAlign    = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(
        truncateText(ctx, src.sourceName, nameR.w),
        nameR.x, nameR.y + nameR.h / 2
      );
    }

    // Header divider line
    if (headerR) {
      ctx.strokeStyle = "#E1DFDD";
      ctx.lineWidth   = 1;
      ctx.beginPath();
      ctx.moveTo(x + 1,     headerR.y + headerR.h);
      ctx.lineTo(x + w - 1, headerR.y + headerR.h);
      ctx.stroke();
    }

    // ── Query rows ─────────────────────────────────────────────────────────
    // Helper: wraps text character-by-character (mirrors CSS overflow-wrap:anywhere)
    // Returns array of line strings that each fit within maxW.
    function wrapText(str, maxW) {
      const words = str.split(/(?<=[\/\-_. ])/); // split after natural break chars
      const lines = [];
      let current = "";
      for (const chunk of words) {
        const test = current + chunk;
        if (ctx.measureText(test).width <= maxW) {
          current = test;
        } else {
          // chunk itself wider than maxW — break character by character
          if (ctx.measureText(chunk).width > maxW) {
            // flush current first
            if (current) { lines.push(current); current = ""; }
            let part = "";
            for (const ch of chunk) {
              if (ctx.measureText(part + ch).width > maxW) {
                if (part) lines.push(part);
                part = ch;
              } else {
                part += ch;
              }
            }
            current = part;
          } else {
            if (current) lines.push(current);
            current = chunk;
          }
        }
      }
      if (current) lines.push(current);
      return lines;
    }

    const queryItems = cardEl.querySelectorAll(".arch-query-item");
    queryItems.forEach((item) => {
      const iR    = toCanvas(item.getBoundingClientRect());
      const label = item.querySelector(".arch-query-label")?.textContent?.trim() || "";
      const text  = item.querySelector(".arch-query-text")?.textContent?.trim()  || "";

      // Layout constants mirroring CSS:
      // .arch-query-item { padding: 7px 14px; gap: 8px }
      // .arch-query-bullet { width:6px; margin-top:4px }
      const ITEM_PAD_TOP = 7;
      const BULLET_X     = iR.x + 14 + 3;
      const TEXT_X       = iR.x + 14 + 6 + 8;
      const maxTextW     = (iR.x + iR.w - 14) - TEXT_X;

      // Bullet aligned with first line cap-height
      const bulletCY = iR.y + ITEM_PAD_TOP + 5;
      ctx.beginPath();
      ctx.arc(BULLET_X, bulletCY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#F2C811";
      ctx.fill();

      let lineY = iR.y + ITEM_PAD_TOP + 11; // baseline of first line

      if (label) {
        ctx.fillStyle    = "#605E5C";
        ctx.font         = `600 11px Segoe UI, Arial, sans-serif`;
        ctx.textAlign    = "left";
        ctx.textBaseline = "alphabetic";
        const labelLines = wrapText(label, maxTextW);
        labelLines.forEach((ln) => {
          ctx.fillText(ln, TEXT_X, lineY);
          lineY += 14;
        });
      }

      if (text) {
        ctx.fillStyle    = "#201F1E";
        ctx.font         = `400 10px Cascadia Code, Consolas, monospace`;
        ctx.textAlign    = "left";
        ctx.textBaseline = "alphabetic";
        const textLines = wrapText(text, maxTextW);
        textLines.forEach((ln) => {
          ctx.fillText(ln, TEXT_X, lineY);
          lineY += 13;
        });
      }

      // row separator
      ctx.strokeStyle = "#E1DFDD";
      ctx.lineWidth   = 1;
      ctx.beginPath();
      ctx.moveTo(x + 1,     iR.y + iR.h);
      ctx.lineTo(x + w - 1, iR.y + iR.h);
      ctx.stroke();
    });

    // No-queries label
    const noQ = cardEl.querySelector(".arch-no-queries");
    if (noQ) {
      const nR = toCanvas(noQ.getBoundingClientRect());
      ctx.fillStyle    = "#605E5C";
      ctx.font         = `italic 11px Segoe UI, Arial, sans-serif`;
      ctx.textAlign    = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(noQ.textContent.trim(), nR.x, nR.y + nR.h / 2);
    }
  });

  // ── 6. Draw Power BI badge ─────────────────────────────────────────────────
  const pbiEl = pbiNodeEl;
  if (pbiEl) {
    const badgeEl = pbiEl.querySelector(".arch-pbi-badge");
    const bR      = badgeEl ? toCanvas(badgeEl.getBoundingClientRect()) : pbiC;

    // Shadow
    ctx.save();
    ctx.shadowColor   = "rgba(23,33,43,0.2)";
    ctx.shadowBlur    = 24;
    ctx.shadowOffsetY = 8;
    roundRectPath(bR.x, bR.y, bR.w, bR.h, 10);
    ctx.fillStyle = "#1B2A38";
    ctx.fill();
    ctx.restore();

    // Badge fill (no shadow)
    roundRectPath(bR.x, bR.y, bR.w, bR.h, 10);
    ctx.fillStyle = "#1B2A38";
    ctx.fill();

    // PBI logo
    const logoSize = 40;
    const logoX    = bR.x + 18;
    const logoY    = bR.y + (bR.h - logoSize) / 2;
    if (pbiLogoImg) {
      ctx.drawImage(pbiLogoImg, logoX, logoY, logoSize, logoSize);
    } else {
      roundRectPath(logoX, logoY, logoSize, logoSize, 6);
      ctx.fillStyle = "#F2C811";
      ctx.fill();
      ctx.fillStyle    = "#1B2A38";
      ctx.font         = `900 12px Segoe UI, Arial, sans-serif`;
      ctx.textAlign    = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("PBI", logoX + logoSize / 2, logoY + logoSize / 2);
    }

    const textX = logoX + logoSize + 14;
    ctx.fillStyle    = "#ffffff";
    ctx.font         = `700 15px Segoe UI, Arial, sans-serif`;
    ctx.textAlign    = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillText("Power BI", textX, bR.y + bR.h / 2 - 2);

    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font      = `600 12px Segoe UI, Arial, sans-serif`;
    ctx.fillText(t().archPbiLabel, textX, bR.y + bR.h / 2 + 16);

    // Sources count below badge
    const countEl = pbiEl.querySelector("[style*='font-size:11px']");
    if (countEl) {
      ctx.fillStyle    = "#605E5C";
      ctx.font         = `400 11px Segoe UI, Arial, sans-serif`;
      ctx.textAlign    = "center";
      ctx.textBaseline = "alphabetic";
      ctx.fillText(countEl.textContent.trim(), bR.x + bR.w / 2, bR.y + bR.h + 16);
    }
  }

  // ── 7. Footer ─────────────────────────────────────────────────────────────
  const title = els.title.textContent || "BI Flow Mapper";
  ctx.fillStyle    = "rgba(93,107,120,0.7)";
  ctx.font         = `400 11px Segoe UI, Arial, sans-serif`;
  ctx.textAlign    = "right";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(`${title}  ·  ${t().exportTimestamp()}`, totalW - 12, totalH - 10);

  downloadCanvas(canvas, exportFilename());
}

function buildArchExportSvg(arch, iconDataMap = {}, powerBiIconData = "") {
  const CONNECTOR_COLORS = {
    "SQL Server":    "#0078D4",
    "Excel":         "#217346",
    "Web":           "#6f52b8",
    "SharePoint":    "#0b6a0b",
    "SharePoint Files": "#0b6a0b",
    "OData":         "#b23a48",
    "CSV":           "#d39200",
    "Folder":        "#4d6b7c",
    "JSON":          "#7a5c1f",
    "Analysis Services": "#5266b8",
    "Oracle":        "#c3423f",
    "PostgreSQL":    "#35668d",
    "MySQL":         "#c7762f",
    "Snowflake":     "#4197b5",
    "Databricks":    "#d64d39",
    "Power Platform Dataflows": "#4f7bd9",
    "Azure Blob Storage": "#0078D4",
    "Azure Data Lake": "#0078D4",
    "Google Analytics": "#d39200",
    "Salesforce":    "#2b8f9f",
    "SAP BW":        "#5266b8",
  };

  const CARD_W = 260;
  const CENTER_W = 120;
  const PBI_W = 300;
  const GAP = 24;
  const PAD = 20;
  const HEADER_H = 56;
  const ROW_H = 28;
  const TOP_PAD = 24;

  const cards = arch.map((src) => {
    const queryItems = (src.queries || []).map((q) => ({
      label: q.name || "",
      path: q.connectionPath || "",
    }));
    const hasFallback = !queryItems.length && src.fallbackPath;
    const rows = queryItems.reduce((sum, item) => sum + (item.path ? 2 : 1), 0) || 1;

    return {
      sourceName: src.sourceName,
      iconUrl: src.iconUrl || "",
      iconDataUrl: iconDataMap[src.iconUrl] || "",
      icon: src.icon || (src.sourceName.match(/\b\w/g) || []).slice(0, 2).join("").toUpperCase() || "SRC",
      color: CONNECTOR_COLORS[src.sourceName] || src.color || "#2176ae",
      queries: queryItems,
      fallbackPath: src.fallbackPath,
      hasFallback,
      height: HEADER_H + Math.max(1, rows) * ROW_H,
    };
  });

  const svgHeight = Math.max(420, TOP_PAD * 2 + cards.reduce((sum, card) => sum + card.height, 0) + GAP * (cards.length - 1));
  const svgWidth = PAD * 2 + CARD_W + GAP + CENTER_W + GAP + PBI_W;

  let y = TOP_PAD;
  const cardGroups = cards.map((card) => {
    const group = {
      x: PAD,
      y,
      width: CARD_W,
      height: card.height,
      ...card,
    };
    y += card.height + GAP;
    return group;
  });

  const pbiHeight = 108;
  const pbiX = PAD + CARD_W + GAP + CENTER_W + GAP;
  const pbiY = Math.max(TOP_PAD, (svgHeight - pbiHeight) / 2);
  const pbiLabel = escapeHtml(t().archPbiLabel);
  const pbiTitle = "Power BI";

  const cardsSvg = cardGroups.map((card) => {
    const contentLines = [];
    let currentY = card.y + HEADER_H + 20;

    if (card.queries.length > 0) {
      card.queries.slice(0, 5).forEach((query) => {
        contentLines.push(`
          <circle cx="${card.x + 10}" cy="${currentY - 2}" r="3" fill="${card.color}"/>`);
        contentLines.push(`
          <text x="${card.x + 20}" y="${currentY}" font-family="Segoe UI,Arial,sans-serif" font-size="11" font-weight="700" fill="#17212b">${escapeHtml(truncateString(query.label || t().archNoQueries, 34))}</text>`);
        currentY += 18;
        if (query.path) {
          contentLines.push(`
          <text x="${card.x + 20}" y="${currentY}" font-family="Segoe UI,Arial,sans-serif" font-size="10" fill="#605E5C">${escapeHtml(truncateString(query.path, 48))}</text>`);
          currentY += 18;
        }
      });
    } else if (card.hasFallback) {
      contentLines.push(`
          <circle cx="${card.x + 10}" cy="${currentY - 2}" r="3" fill="${card.color}"/>`);
      contentLines.push(`
          <text x="${card.x + 20}" y="${currentY}" font-family="Segoe UI,Arial,sans-serif" font-size="11" fill="#605E5C">${escapeHtml(truncateString(card.fallbackPath, 48))}</text>`);
    } else {
      contentLines.push(`
          <text x="${card.x + 16}" y="${currentY + 2}" font-family="Segoe UI,Arial,sans-serif" font-size="11" font-style="italic" fill="#888888">${escapeHtml(t().archNoQueries)}</text>`);
    }

    return `
      <g>
        <rect x="${card.x}" y="${card.y}" width="${card.width}" height="${card.height}" rx="18" fill="#ffffff" stroke="#E1DFDD" stroke-width="1.5"/>
        <rect x="${card.x}" y="${card.y}" width="${card.width}" height="${HEADER_H}" rx="18" fill="#ffffff"/>
        <rect x="${card.x + 14}" y="${card.y + 10}" width="36" height="36" rx="10" fill="${card.color}"/>
        ${card.iconDataUrl ? `<image href="${escapeHtml(card.iconDataUrl)}" x="${card.x + 16}" y="${card.y + 12}" width="32" height="32" preserveAspectRatio="xMidYMid slice"/>` : `<text x="${card.x + 32}" y="${card.y + 32}" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="13" font-weight="800" fill="#ffffff">${escapeHtml(card.icon)}</text>`}
        <text x="${card.x + 60}" y="${card.y + 30}" font-family="Segoe UI,Arial,sans-serif" font-size="13" font-weight="700" fill="#17212b">${escapeHtml(truncateString(card.sourceName, 24))}</text>
        ${contentLines.join("")}
      </g>`;
  }).join("");

  const pathsSvg = cardGroups.map((card) => {
    const x1 = card.x + card.width;
    const y1 = card.y + card.height / 2;
    const x2 = pbiX;
    const y2 = pbiY + pbiHeight / 2;
    const cp = (x2 - x1) * 0.45;
    return `
      <path d="M ${x1} ${y1} C ${x1 + cp} ${y1}, ${x2 - cp} ${y2}, ${x2} ${y2}"
        fill="none" stroke="${card.color}" stroke-width="2.5" opacity="0.75" marker-end="url(#arch-arrow)"/>`;
  }).join("");

  return {
    width: svgWidth,
    height: svgHeight,
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
        <defs>
          <marker id="arch-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#1B2A38" opacity="0.7"/>
          </marker>
        </defs>
        <rect width="100%" height="100%" fill="#F3F2F1" />
        ${cardsSvg}
        ${pathsSvg}
        <g transform="translate(${pbiX}, ${pbiY})">
          <rect x="0" y="0" width="${PBI_W}" height="${pbiHeight}" rx="18" fill="#1B2A38" />
          ${powerBiIconData ? `<image href="${escapeHtml(powerBiIconData)}" x="${(PBI_W - 40) / 2}" y="14" width="40" height="40" preserveAspectRatio="xMidYMid slice"/>` : `<text x="${PBI_W / 2}" y="38" font-family="Segoe UI,Arial,sans-serif" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">${escapeHtml(pbiTitle)}</text>`}
          <text x="${PBI_W / 2}" y="68" font-family="Segoe UI,Arial,sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">${escapeHtml(pbiLabel)}</text>
          <text x="${PBI_W / 2}" y="90" font-family="Segoe UI,Arial,sans-serif" font-size="11" fill="#B8C7D7" text-anchor="middle">${escapeHtml(t().archSourcesCount(arch.length))}</text>
        </g>
      </svg>`,
  };
}

function drawSvgStringToPng(svgString, width, height, filename) {
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    const DPR = 2;
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.drawImage(img, 0, 0, width, height);
    downloadCanvas(canvas, filename);
    URL.revokeObjectURL(url);
  };
  img.onerror = () => URL.revokeObjectURL(url);
  img.src = url;
}

function exportPagesImage() {
  const pages = state.pages || [];
  if (!pages.length) return;

  const T       = t();
  const DPR     = 2;
  const PAD     = 40;
  const CARD_W  = 600;
  const CARD_H  = 72;
  const CARD_GAP = 12;
  const RADIUS  = 8;
  const ORDINAL_R = 14;          // circle radius
  const ACCENT  = "#F2C94C";    // yellow left border
  const BLUE    = "#2176ae";
  const TITLE_FONT = "700 14px Inter, Segoe UI, Arial, sans-serif";
  const META_FONT  = "400 11px Inter, Segoe UI, Arial, sans-serif";

  const totalH = PAD + pages.length * (CARD_H + CARD_GAP) - CARD_GAP + PAD + 32;
  const totalW = PAD * 2 + CARD_W;

  const canvas = document.createElement("canvas");
  canvas.width  = totalW * DPR;
  canvas.height = totalH * DPR;
  const ctx = canvas.getContext("2d");
  ctx.scale(DPR, DPR);

  // Background
  ctx.fillStyle = "#EEECEA";
  ctx.fillRect(0, 0, totalW, totalH);
  ctx.fillStyle = "#C8C6C4";
  const GRID = 24;
  for (let gx = 0; gx < totalW; gx += GRID)
    for (let gy = 0; gy < totalH; gy += GRID) {
      ctx.beginPath();
      ctx.arc(gx + GRID / 2, gy + GRID / 2, 1.25, 0, Math.PI * 2);
      ctx.fill();
    }

  pages.forEach((page, i) => {
    const x = PAD;
    const y = PAD + i * (CARD_H + CARD_GAP);

    // Card shadow
    ctx.save();
    ctx.shadowColor   = "rgba(23,33,43,0.10)";
    ctx.shadowBlur    = 12;
    ctx.shadowOffsetY = 3;
    roundRect(ctx, x, y, CARD_W, CARD_H, RADIUS);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.restore();

    // Yellow left border accent
    roundRect(ctx, x, y, 4, CARD_H, [RADIUS, 0, 0, RADIUS]);
    ctx.fillStyle = ACCENT;
    ctx.fill();

    // Ordinal circle
    const cx = x + 28;
    const cy = y + CARD_H / 2;
    ctx.beginPath();
    ctx.arc(cx, cy, ORDINAL_R, 0, Math.PI * 2);
    ctx.fillStyle = BLUE;
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 11px Inter, Segoe UI, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(page.ordinal + 1), cx, cy);

    // Page name
    const textX = x + 58;
    ctx.fillStyle = "#201f1e";
    ctx.font = TITLE_FONT;
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(truncateText(ctx, page.name, CARD_W - 70), textX, y + CARD_H / 2 - 4);

    // Meta badges
    const visLabel    = T.pagesVisualsLabel(page.visualCount);
    const canvasLabel = T.pagesCanvasLabel(page.width, page.height);
    ctx.font = META_FONT;
    ctx.fillStyle = "#605e5c";
    ctx.textBaseline = "alphabetic";

    // vis badge
    const visBadgeW = ctx.measureText(visLabel).width + 14;
    roundRect(ctx, textX, y + CARD_H / 2 + 8, visBadgeW, 18, 4);
    ctx.fillStyle = "#edebe9";
    ctx.fill();
    ctx.fillStyle = "#605e5c";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(visLabel, textX + 7, y + CARD_H / 2 + 17);

    // canvas badge
    const cvX = textX + visBadgeW + 6;
    const cvBadgeW = ctx.measureText(canvasLabel).width + 14;
    roundRect(ctx, cvX, y + CARD_H / 2 + 8, cvBadgeW, 18, 4);
    ctx.fillStyle = "#e8f0fb";
    ctx.fill();
    ctx.fillStyle = BLUE;
    ctx.fillText(canvasLabel, cvX + 7, y + CARD_H / 2 + 17);
  });

  // Footer
  const title     = els.title.textContent || "BI Flow Mapper";
  const timestamp = t().exportTimestamp();
  ctx.fillStyle   = "rgba(93,107,120,0.7)";
  ctx.font        = "400 11px Inter, Segoe UI, Arial, sans-serif";
  ctx.textAlign   = "right";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(`${title}  ·  ${timestamp}`, totalW - PAD, totalH - 12);

  downloadCanvas(canvas, exportFilename());
}

function exportFilename() {
  const title = els.title.textContent || "BI Flow Mapper";
  return (title.replace(/[^a-z0-9]/gi, "_").toLowerCase() || "lineage") + ".png";
}

function downloadCanvas(canvas, filename) {
  canvas.toBlob((blob) => {
    if (!blob) return;

    // pywebview blocks link.click() downloads — use the Python bridge instead.
    if (window.pywebview && window.pywebview.api && window.pywebview.api.save_file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // reader.result = "data:image/png;base64,<b64>"  — strip the prefix
        const b64 = reader.result.split(",")[1];
        window.pywebview.api.save_file(b64, filename, "image/png")
          .then((result) => {
            if (result && !result.ok && result.reason !== "cancelled") {
              console.error("[BIFlowMapper] save_file error:", result.reason);
            }
          })
          .catch((err) => console.error("[BIFlowMapper] save_file exception:", err));
      };
      reader.readAsDataURL(blob);
      return;
    }

    // Fallback: normal browser download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }, "image/png");
}

function fetchImageAsDataUrl(src) {
  return fetch(src)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch image");
      return response.blob();
    })
    .then((blob) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    }));
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function truncateString(text, maxChars) {
  const value = String(text || "");
  return value.length > maxChars ? value.slice(0, maxChars - 1) + "…" : value;
}

// Helpers do Canvas

function roundRect(ctx, x, y, w, h, r) {
  const radii = Array.isArray(r) ? r : [r, r, r, r];
  ctx.beginPath();
  ctx.moveTo(x + radii[0], y);
  ctx.lineTo(x + w - radii[1], y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radii[1]);
  ctx.lineTo(x + w, y + h - radii[2]);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radii[2], y + h);
  ctx.lineTo(x + radii[3], y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radii[3]);
  ctx.lineTo(x, y + radii[0]);
  ctx.quadraticCurveTo(x, y, x + radii[0], y);
  ctx.closePath();
}

function drawCanvasEdge(ctx, from, to, pad, stroke, sw) {
  const x1 = from.x + from.w + pad;
  const y1 = from.y + from.h / 2 + pad;
  const x2 = to.x + pad;
  const y2 = to.y + to.h / 2 + pad;
  const mid = x1 + Math.max(40, (x2 - x1) / 2);

  ctx.save();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = sw;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.bezierCurveTo(mid, y1, mid, y2, x2, y2);
  ctx.stroke();
  drawArrow(ctx, mid, y2, x2, y2, stroke, sw);
  ctx.restore();
}

function parseBezierPoints(d) {
  // Extrai pontos de "M x1 y1 C cpx1 cpy1, cpx2 cpy2, x2 y2"
  const m = d.match(/M\s*([\d.]+)\s+([\d.]+)\s+C\s*([\d.]+)\s+([\d.]+),\s*([\d.]+)\s+([\d.]+),\s*([\d.]+)\s+([\d.]+)/);
  if (!m) return null;
  return {
    x1: +m[1], y1: +m[2],
    cpx1: +m[3], cpy1: +m[4],
    cpx2: +m[5], cpy2: +m[6],
    x2:  +m[7], y2:  +m[8],
  };
}

function drawArrow(ctx, fromX, fromY, toX, toY, color, sw) {
  const angle  = Math.atan2(toY - fromY, toX - fromX);
  const size   = 8 + sw;
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.translate(toX, toY);
  ctx.rotate(angle);
  ctx.moveTo(0, 0);
  ctx.lineTo(-size, -size * 0.45);
  ctx.lineTo(-size,  size * 0.45);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function truncateText(ctx, text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(t + "…").width > maxWidth) {
    t = t.slice(0, -1);
  }
  return t + "…";
}

function labelForId(id) {
  const node = state.graph.nodes.find((item) => item.id === id);
  return node ? node.label : id;
}

function uniqueById(items) {
  return Array.from(new Map(items.map((item) => [item.id, item])).values());
}

function uniqueByName(items) {
  return Array.from(new Map(items.map((item) => [item.name, item])).values());
}

function uniqueEdges(items) {
  return Array.from(new Map(items.map((item) => [item.id, item])).values());
}

function snippetAround(text, term, size) {
  const index = text.toLowerCase().indexOf(term.toLowerCase());
  if (index < 0) return "";
  return text.slice(Math.max(0, index - size / 3), index + size);
}

function slug(value) {
  return normalize(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "item";
}

function normalize(value) {
  return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function initials(value) {
  return String(value)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function toTitle(value) {
  return String(value)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}
