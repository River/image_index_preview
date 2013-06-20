jQuery(document).ready(function($) {

	 /**
		* This plugin adds image preview to the publish pages.
		*
		* @author: Symphony Community
		* @source: https://github.com/symphonists/image_index_preview
		*/

	 var root, page, link, path, file, size;

	 root = Symphony.Context.get('root');
	 page = Symphony.Context.get('env')['page'];

	 $('table td[class*="upload"] a, fieldset div[class*="upload"] a', '#contents').each(function() {

			link = $(this);
			
			path = link.attr('href');
			short_path = path.split('/workspace/')[1];
			
			if (page == 'index') {
				dimensions = '50/50';
			} else {
				dimensions = '150/150';
			}
			
			 if (path.match(/\.(?:bmp|gif|jpe?g|png)$/i)) {

					// remove file name

					link.text('');

					// add preview

					$('<img />', {

						 src: root + '/image/2/' + dimensions + '/5/' + short_path

					}).prependTo(link);
			 }
	 });
});
