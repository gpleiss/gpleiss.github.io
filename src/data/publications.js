import rawPublications from './publications.json';

// Assets
import phdThesis from '../pdfs/gpleiss_thesis.pdf';
import knighton2019potential from '../pdfs/knighton2019potential.pdf';

const _publicationPdfs = {
  "pleiss2020scalable": phdThesis,
  "knighton2019potential": knighton2019potential,
}

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
  item.pdf = _publicationPdfs[item.id] || (item.arxiv ? item.arxiv.replace("/abs/", "/pdf/") + ".pdf" : item.pdf);
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
