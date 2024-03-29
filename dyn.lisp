(defvar *mode* "safe")

(deftype task () '(or list string))

(declaim (ftype (function (task) integer) really-process))
(defun really-process (task)
  (format t "~a: ~a~%" *mode* task)
  (length task))

(declaim (ftype (function (task) integer) process))
(defun process (task)
  (really-process task))

(declaim (ftype (function (string function) result) with-mode))
(defun with-mode (mode action)
  (let ((*mode* mode)) (funcall action)))

(defun hello-world()
  (format t "Hello, world!"))

(defun make-cd (title artist rating ripped)
  (list :title title :artist artist :rating rating :ripped ripped)
  (format t "~a, ~a, ~a, ~a" title artist rating ripped))  

(declaim (ftype (function () null) main))
(defun main ()
  (format t "~{~a~^ ~}~%" (list
    (process "something")
    (with-mode "faster" (lambda () (process "reliable")))
    (process (list "again"))))
  (hello-world)
  (make-cd "Roses" "Kathy Mattea" 7 t)
  ())

(main)