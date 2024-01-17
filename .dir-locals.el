(;; Dir settings
 (nil . ((indent-tabs-mode . t)
         (fill-column . 120)
         (mode . auto-fill)))
 ("content" . ((org-mode . (
                            (eval . (progn
				      ;; Read content of revealjs-plugins-conf and set assign it to org-re-reveal-init-script
				      (setq org-re-reveal-init-script
					    (with-temp-buffer
					      (insert-file-contents "revealjs-plugins-conf.js")
					      (buffer-string)))

					  ;; Especially for inheriting background images
					  (setq org-use-property-inheritance t)

				      (defun tob64 (filename)
						"Transforms a file FILENAME in base64."
						(base64-encode-string
						 (with-temp-buffer
						   (insert-file-contents filename)
						   (buffer-string))))

				      (defun html-base64-images (text backend info)
						"Replaces files links in TEXT with appropriate html string when BACKEND is html. INFO is ignored."
						(when (org-export-derived-backend-p backend 'html)
						  (when (string-match "^<img" text)
							(let ((filename (replace-regexp-in-string ".*=\"" "" (replace-regexp-in-string "\\\" .*" "" text))))
							  (format  "<img src=\"data:image/png;base64,%s\">" (tob64 filename)))
							)
						  )
						)
				      ;; On export, convert every PNG file into base64 data
				      ;; (add-to-list 'org-export-filter-link-functions 'html-base64-images)
                                      ))))))
 )
