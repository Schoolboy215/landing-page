var siteData = JSON.parse(sites);
siteData.forEach(function(site) {
    $("#sitesHolder").append(`
    <div class="card  border-info">
        <div class="card-header border-info">
            ${site.name}
        </div>
        <div class="card-body text-info">
            <i class="${site.icon} fa-lg"></i>
            <p class="card-text">${site.description}</p>
        </div>
        <a class="card-footer list-group-item-action" href="${site.url}" target="_blank">
            Visit
        </a>
    </div>
    `)
});