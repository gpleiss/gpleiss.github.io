import rawPublications from './publications.json';

const publications = rawPublications.filter((item) => !item.hide).map((item) => {
  const {uq, bo, dl, gp_nla, stm, pm, cv, ...others} = item.tags || {};
  item.tags = {
    uq: !!uq,
    bo: !!bo,
    dl: !!dl,
    gp_nla: !!gp_nla,
    stm: !!stm,
    pm: !!pm,
    cv: !!cv,
  }
  if (Object.keys(others).length) {
    console.warn("Unknown tags in item:", item.id, others);
  }
  if (!Object.values(item.tags).some((v) => v)) {
    console.warn("No tags in item:", item.id);
  }
  item.booktitle = item.booktitle ? item.booktitle.replaceAll("``", "\"").replaceAll("''", "\"") : null;
  item.pdf = (item.arxiv ? item.arxiv.replace("/abs/", "/pdf/") + ".pdf" : item.pdf);
  return item;
});

const publicationsDict = {};
publications.forEach((item) => {
  if (item.id in publicationsDict) {
    console.warn("Duplicate publication ID:", item.id);
  }
  publicationsDict[item.id] = item;
});

export { publications, publicationsDict };
