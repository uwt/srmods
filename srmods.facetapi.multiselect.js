Drupal.behaviors.srmodsFacetApiMultiselectWidget = {
  attach: function (context, settings) {
    // Go through each facet API multiselect element that is being displayed.
    jQuery('.facetapi-multiselect', context).each(function () {
      // Attach the behavior to it.
      jQuery(this).multiselect({
        // Pass in whatever array of options you need here.
         position: {
          my: 'left bottom',
          at: 'left top'
        }
      });
    });
  }
};
